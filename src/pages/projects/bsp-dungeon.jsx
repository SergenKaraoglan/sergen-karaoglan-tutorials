import { Canvas, useLoader } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Html } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";

export default function BSPCanvas() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={true} />
        <BSPDungeon />
      </Canvas>
    </div>
  );
}

function BSPDungeon() {
  const rooms = [];
  const corridors = [];
  const floorTexture = useLoader(TextureLoader, "/doom-floor.png");
  floorTexture.repeat.set(8, 8);
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;

  const wallTexture = useLoader(TextureLoader, "/doom-wall.png");
  wallTexture.repeat.set(4, 4);
  wallTexture.wrapS = THREE.RepeatWrapping;
  wallTexture.wrapT = THREE.RepeatWrapping;

  const roomTiles = <DungeonRooms floorTexture={floorTexture} leafs={rooms} />;
  const corridorTiles = (
    <DungeonCorridors rooms={rooms} corridors={corridors} />
  );
  console.log(corridors);
  const walls = (
    <DungeonWalls
      wallTexture={wallTexture}
      rooms={rooms}
      corridors={corridors}
    />
  );
  const ceilings = (
    <DungeonCeilings leafs={rooms} ceilingTexture={wallTexture} />
  );
  return [roomTiles, walls, corridorTiles];
}

function DungeonRooms({ floorTexture, leafs }) {
  class BSPNode {
    constructor() {
      this.left = null;
      this.right = null;
      this.x1 = null;
      this.y1 = null;
      this.x2 = null;
      this.y2 = null;
      this.id = null;
    }
  }

  function generateBSP(x1, y1, x2, y2) {
    let id = 0;
    const root = new BSPNode();
    root.x1 = x1;
    root.y1 = y1;
    root.x2 = x2;
    root.y2 = y2;
    root.id = id;

    const nodes = [root];
    while (nodes.length) {
      const node = nodes.pop();
      const width = node.x2 - node.x1;
      const height = node.y2 - node.y1;

      if (width > 4 && height > 4) {
        // random split
        let split = Math.floor(Math.random() * 10) / 10;
        split = Math.max(split, 0.4);
        split = Math.min(split, 0.7);

        node.left = structuredClone(node);
        node.right = structuredClone(node);

        if (width > height || (width === height && Math.random() > 0.5)) {
          split = Math.floor(width * split);
          node.left.x2 = node.x2 - split;
          node.right.x1 = node.x1 + (width - split);
        } else {
          split = Math.floor(height * split);
          node.left.y2 = node.y2 - split;
          node.right.y1 = node.y1 + (height - split);
        }
        node.left.id = ++id;
        node.right.id = ++id;
        nodes.push(node.left);
        nodes.push(node.right);
      } else {
        leafs.push(node);
      }
    }
  }

  generateBSP(-5, -5, 5, 5);

  // render BSP tree
  function renderRooms() {
    return leafs.map((leaf) => {
      // trim rooms
      const trim = 0.5;
      leaf.x1 += trim;
      leaf.y1 += trim;
      leaf.x2 -= trim;
      leaf.y2 -= trim;

      return (
        <Floor
          key={leaf.id}
          width={leaf.x2 - leaf.x1}
          height={leaf.y2 - leaf.y1}
          x={(leaf.x2 + leaf.x1) / 2}
          y={(leaf.y2 + leaf.y1) / 2}
          texture={floorTexture}
        />
      );
    });
  }

  const rooms = renderRooms();
  return rooms;
}

function DungeonCorridors({ rooms, corridors }) {
  // connect sibling rooms
  const corridorTiles = [];
  function connectRooms() {
    for (let i = 0; i < rooms.length - 1; i++) {
      const x1 = rooms[i].x1;
      const y1 = rooms[i].y1;
      const x2 = rooms[i].x2;
      const y2 = rooms[i].y2;

      const x3 = rooms[i + 1].x1;
      const y3 = rooms[i + 1].y1;
      const x4 = rooms[i + 1].x2;
      const y4 = rooms[i + 1].y2;

      // get center of room
      const roomX = (x2 + x1) / 2;
      const roomY = (y2 + y1) / 2;

      const room2X = (x4 + x3) / 2;
      const room2Y = (y4 + y3) / 2;

      // draw corridor between edge of rooms
      if (x2 < x3) {
        corridorTiles.push(
          <Floor
            width={x3 - x2}
            height={0.5}
            x={(x2 + x3) / 2}
            y={roomY}
            z={0.1}
          />
        );
        corridors.push({ x1: x2, y1: roomY, x2: x3, y2: roomY });
      }
      if (x4 < x1) {
        corridorTiles.push(
          <Floor
            width={x1 - x4}
            height={0.5}
            x={(x1 + x4) / 2}
            y={room2Y}
            z={0.1}
          />
        );
        corridors.push({ x1: x1, y1: room2Y, x2: x4, y2: room2Y });
      }
      if (y2 < y3) {
        corridorTiles.push(
          <Floor
            width={0.5}
            height={y3 - y2}
            x={room2X}
            y={(y2 + y3) / 2}
            z={0.1}
          />
        );
        corridors.push({ x1: room2X, y1: y2, x2: room2X, y2: y3 });
      }
      if (y4 < y1) {
        corridorTiles.push(
          <Floor
            width={0.5}
            height={y1 - y4}
            x={roomX}
            y={(y1 + y4) / 2}
            z={0.1}
          />
        );
        corridors.push({ x1: roomX, y1: y1, x2: roomX, y2: y4 });
      }
    }
  }

  connectRooms();
  return corridorTiles;
}

function DungeonWalls({ rooms, corridors, wallTexture }) {
  // build walls
  const walls = [];
  function buildWalls() {
    for (let i = 0; i < rooms.length; i++) {
      // get premiter of room
      const x1 = rooms[i].x1;
      const y1 = rooms[i].y1;
      const x2 = rooms[i].x2;
      const y2 = rooms[i].y2;
      // build walls
      for (let j = 0; j < 2; j++) {
        walls.push(
          <Wall
            width={x2 - x1}
            height={0.1}
            depth={2}
            x={(x2 + x1) / 2}
            y={j == 0 ? y1 : y2}
            z={0.5}
            texture={wallTexture}
          />
        );
      }

      for (let j = 0; j < 2; j++) {
        walls.push(
          <Wall
            width={0.1}
            height={y2 - y1}
            depth={2}
            x={j == 0 ? x1 : x2}
            y={(y2 + y1) / 2}
            z={0.5}
            texture={wallTexture}
          />
        );
      }
    }
    // build corridor walls
    console.log(rooms);
    console.log(rooms.length);
    console.log(corridors);
    console.log(corridors[0]);
    for (let i = 0; i < corridors.length; i++) {
      // get premiter of corridor
      console.log(corridors[i]);
      const x1 = corridors[i].x1;
      const y1 = corridors[i].y1;
      const x2 = corridors[i].x2;
      const y2 = corridors[i].y2;
      // build walls
      for (let j = 0; j < 2; j++) {
        walls.push(
          <Wall
            width={x2 - x1}
            height={0.1}
            depth={2}
            x={(x2 + x1) / 2}
            y={j == 0 ? y1 : y2}
            z={0.5}
            texture={wallTexture}
          />
        );
      }

      for (let j = 0; j < 2; j++) {
        walls.push(
          <Wall
            width={0.1}
            height={y2 - y1}
            depth={2}
            x={j == 0 ? x1 : x2}
            y={(y2 + y1) / 2}
            z={0.5}
            texture={wallTexture}
          />
        );
      }
    }
  }

  buildWalls();
  return walls;
}

function DungeonCeilings({ leafs, ceilingTexture }) {
  const ceilings = [];
  function buildCeilings() {
    for (let i = 0; i < leafs.length; i++) {
      // get premiter of room
      const x1 = leafs[i].x1;
      const y1 = leafs[i].y1;
      const x2 = leafs[i].x2;
      const y2 = leafs[i].y2;
      // build walls
      ceilings.push(
        <Floor
          width={x2 - x1}
          height={y2 - y1}
          x={(x2 + x1) / 2}
          y={(y2 + y1) / 2}
          z={1.5}
          texture={ceilingTexture}
        />
      );
    }
  }

  buildCeilings();
  return ceilings;
}

function Floor({ width, height, x, y, z = 0, texture }) {
  return (
    <mesh position={[x, y, z]}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Wall({ width, height, depth, x, y, z, texture }) {
  return (
    <mesh position={[x, y, z]}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
