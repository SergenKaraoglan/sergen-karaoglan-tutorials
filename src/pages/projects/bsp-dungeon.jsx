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
  const rooms = DungeonRooms();

  return rooms;
}

function DungeonRooms() {
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
    const leafs = [];
    while (nodes.length) {
      const node = nodes.pop();
      const width = node.x2 - node.x1;
      const height = node.y2 - node.y1;
      // random split
      let split = Math.floor(Math.random() * 10) / 10;
      split = Math.max(split, 0.4);
      split = Math.min(split, 0.7);
      if (width > 4 && height > 4) {
        if (width > height || (width === height && Math.random() > 0.5)) {
          split = Math.floor(width * split);
          node.left = new BSPNode();
          node.left.x1 = node.x1;
          node.left.y1 = node.y1;
          node.left.x2 = node.x2 - split;
          node.left.y2 = node.y2;
          node.right = new BSPNode();
          node.right.x1 = node.x1 + (width - split);
          node.right.y1 = node.y1;
          node.right.x2 = node.x2;
          node.right.y2 = node.y2;
        } else {
          split = Math.floor(height * split);
          node.left = new BSPNode();
          node.left.x1 = node.x1;
          node.left.y1 = node.y1;
          node.left.x2 = node.x2;
          node.left.y2 = node.y2 - split;
          node.right = new BSPNode();
          node.right.x1 = node.x1;
          node.right.y1 = node.y1 + (height - split);
          node.right.x2 = node.x2;
          node.right.y2 = node.y2;
        }
        node.left.id = ++id;
        node.right.id = ++id;
        nodes.push(node.left);
        nodes.push(node.right);
      } else {
        leafs.push(node);
      }
    }
    return leafs;
  }

  const leafs = generateBSP(-5, -5, 5, 5);

  // render BSP tree
  function renderBSP() {
    return leafs.map((leaf) => {
      // trim leafs
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
          x={leaf.x2 - (leaf.x2 - leaf.x1) / 2}
          y={leaf.y2 - (leaf.y2 - leaf.y1) / 2}
        />
      );
    });
  }

  const rooms = renderBSP();
  return rooms;
}

function DungeonCorridors() {
  // connect sibling rooms
  function connectRooms() {
    for (let i = 0; i < leafs.length - 1; i++) {
      // get center of room
      const x = (leafs[i].x1 + leafs[i].x2) / 2;
      const y = leafs[i].y1 + (leafs[i].y2 - leafs[i].y1) / 2;

      const x2 = leafs[i + 1].x1 + (leafs[i + 1].x2 - leafs[i + 1].x1) / 2;
      const y2 = leafs[i + 1].y1 + (leafs[i + 1].y2 - leafs[i + 1].y1) / 2;

      // draw corridor between rooms
      rooms.push(
        <Floor
          width={Math.abs(x - x2)}
          height={0.5}
          x={(x + x2) / 2}
          y={y}
          z={0.1}
        />
      );
      rooms.push(
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
}

function DungeonWalls() {
  // build walls
  function buildWalls() {
    //const walls = [];
    for (let i = 0; i < leafs.length; i++) {
      // get premiter of room
      const x1 = leafs[i].x1;
      const y1 = leafs[i].y1;
      const x2 = leafs[i].x2;
      const y2 = leafs[i].y2;
      // build walls
      rooms.push(
        <Wall
          width={x2 - x1}
          height={0.1}
          depth={1}
          x={x2 - (x2 - x1) / 2}
          y={y1}
          z={0.5}
        />
      );
      rooms.push(
        <Wall
          width={x2 - x1}
          height={0.1}
          depth={1}
          x={x2 - (x2 - x1) / 2}
          y={y2}
          z={0.5}
        />
      );
      rooms.push(
        <Wall
          width={0.1}
          height={y2 - y1}
          depth={1}
          x={x1}
          y={y2 - (y2 - y1) / 2}
          z={0.5}
        />
      );
      rooms.push(
        <Wall
          width={0.1}
          height={y2 - y1}
          depth={1}
          x={x2}
          y={y2 - (y2 - y1) / 2}
          z={0.5}
        />
      );
    }
  }

  buildWalls();
}

function Floor({ width, height, x, y, z = 0 }) {
  const colorMap = useLoader(TextureLoader, "/doom-floor.png");
  colorMap.repeat.set(4, 4);
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;
  return (
    <mesh position={[x, y, z]}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

function Wall({ width, height, depth, x, y, z }) {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <mesh position={[x, y, z]}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
