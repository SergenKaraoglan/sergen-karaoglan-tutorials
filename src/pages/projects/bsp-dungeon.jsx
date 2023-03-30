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
  let leafs = []
  const floorTexture = useLoader(TextureLoader, "/doom-floor.png");
  floorTexture.repeat.set(8, 8);
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;

  const wallTexture = useLoader(TextureLoader, "/doom-wall.png");
  wallTexture.repeat.set(4, 4);
  wallTexture.wrapS = THREE.RepeatWrapping;
  wallTexture.wrapT = THREE.RepeatWrapping;

  const rooms = <DungeonRooms floorTexture={floorTexture} leafs={leafs} />;
  const walls = <DungeonWalls wallTexture={wallTexture} leafs={leafs} />;
  const corridors = <DungeonCorridors leafs={leafs} />;

  return [rooms, walls, corridors];
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
      const trim = 0.1;
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

function DungeonWalls({leafs, wallTexture}) {
  // build walls
  const walls = [];
  function buildWalls() {
    //const walls = [];
    for (let i = 0; i < leafs.length; i++) {
      // get premiter of room
      const x1 = leafs[i].x1;
      const y1 = leafs[i].y1;
      const x2 = leafs[i].x2;
      const y2 = leafs[i].y2;
      // build walls
      for (let j = 0; j < 2; j++) {
      walls.push(
        <Wall
          width={x2 - x1}
          height={0.1}
          depth={1}
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
            depth={1}
            x={j==0 ? x1 : x2}
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

function DungeonCorridors({leafs}) {
  const corridors = [];
  // connect sibling rooms
  function connectRooms() {
    for (let i = 0; i < leafs.length - 1; i++) {
      // get center of room
      const x = (leafs[i].x1 + leafs[i].x2) / 2;
      const y = (leafs[i].y1 + leafs[i].y2 ) / 2;

      const x2 = (leafs[i+1].x1 + leafs[i+1].x2) / 2;
      const y2 = (leafs[i+1].y1 + leafs[i+1].y2 ) / 2;

      // draw corridor between rooms
      corridors.push(
        <Floor
          width={Math.abs(x - x2)}
          height={0.5}
          x={(x + x2) / 2}
          y={y}
          z={0.1}
        />
      );
      corridors.push(
        <Floor
          width={0.5}
          height={Math.abs(y - y2)}
          x={x2}
          y={(y + y2) / 2}
          z={0.1}
        />
      );
    }
  }

  connectRooms();
  return corridors;
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
