import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Html } from "@react-three/drei";

export default function BSPCanvas() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={true} />
        <BSPDungeon />
        {/* <Floor width={10} height={10} x={0} y={-5} /> */}
      </Canvas>
    </div>
  );
}

function BSPDungeon() {
  // generate BSP tree
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
      split = Math.max(split, 0.3);
      if (width > 5 && height > 5) {
        if (width > height) {
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
  console.log(rooms);

  return rooms;
}

function Floor({ width, height, x, y, z = 0 }) {
  // Random color
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <mesh position={[x, y, z]}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
