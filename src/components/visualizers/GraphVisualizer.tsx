import { useState } from "react";
import { motion } from "framer-motion";

interface Node {
  id: string;
  x: number;
  y: number;
  neighbors: string[];
}

const graph: Node[] = [
  { id: "A", x: 50, y: 60, neighbors: ["B", "D"] },
  { id: "B", x: 200, y: 40, neighbors: ["A", "C", "E"] },
  { id: "C", x: 350, y: 60, neighbors: ["B"] },
  { id: "D", x: 80, y: 180, neighbors: ["A", "E"] },
  { id: "E", x: 240, y: 180, neighbors: ["B", "D"] },
];

export default function GraphVisualizer() {
  const [visited, setVisited] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const bfs = async (start: string) => {
    setIsRunning(true);
    const queue = [start];
    const seen = new Set<string>();

    const visitNode = async (id: string) => {
      setVisited((prev) => [...prev, id]);
      await new Promise((r) => setTimeout(r, 600));
    };

    while (queue.length) {
      const node = queue.shift()!;
      if (!seen.has(node)) {
        seen.add(node);
        await visitNode(node);

        const curr = graph.find((n) => n.id === node)!;
        for (let nb of curr.neighbors) {
          if (!seen.has(nb)) queue.push(nb);
        }
      }
    }

    setIsRunning(false);
  };

  const dfs = async (start: string) => {
    setIsRunning(true);
    const seen = new Set<string>();

    const explore = async (node: string) => {
      seen.add(node);
      setVisited((prev) => [...prev, node]);
      await new Promise((r) => setTimeout(r, 600));

      const curr = graph.find((n) => n.id === node)!;
      for (let nb of curr.neighbors) {
        if (!seen.has(nb)) await explore(nb);
      }
    };

    await explore(start);
    setIsRunning(false);
  };

  const reset = () => setVisited([]);

  return (
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-1">Graph Traversal</h3>
      <p className="text-gray-600 text-sm mb-4">
        Visualizing BFS & DFS on a small connected graph.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mb-4">
        <button
          disabled={isRunning}
          onClick={() => { reset(); bfs("A"); }}
          className="px-3 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Run BFS
        </button>

        <button
          disabled={isRunning}
          onClick={() => { reset(); dfs("A"); }}
          className="px-3 py-2 bg-purple-600 text-white rounded disabled:opacity-50"
        >
          Run DFS
        </button>
      </div>

      {/* Graph Canvas */}
      <div className="relative w-full h-64 bg-white/60 border rounded-xl">
        {/* Edges */}
        {graph.map((node) =>
          node.neighbors.map((nb) => {
            const to = graph.find((n) => n.id === nb)!;

            return (
              <svg
                key={node.id + "-" + nb}
                className="absolute top-0 left-0 pointer-events-none"
                width="100%"
                height="100%"
              >
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#999"
                  strokeWidth="2"
                />
              </svg>
            );
          })
        )}

        {/* Nodes */}
        {graph.map((node) => (
          <motion.div
            key={node.id}
            className="absolute flex items-center justify-center rounded-full w-10 h-10 shadow-md"
            style={{
              left: node.x - 20,
              top: node.y - 20,
              background: visited.includes(node.id) ? "#f472b6" : "white",
              border: "2px solid #333",
            }}
            animate={{
              scale: visited.includes(node.id) ? 1.15 : 1,
            }}
          >
            {node.id}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
