import StackVisualizer from "./visualizers/StackVisualizer";
import QueueVisualizer from "./visualizers/QueueVisualizer";
import BinarySearchVisualizer from "./visualizers/BinarySearchVisualizer";
import GraphVisualizer from "./visualizers/GraphVisualizer";
import RecursionVisualizer from "./visualizers/RecursionVisualizer";

interface Props {
  concept: string | null;
}

export default function AlgorithmVisualizer({ concept }: Props) {
  if (!concept)
    return (
      <p className="text-gray-500">
        Pick a concept to see a visual explanation.
      </p>
    );

  switch (concept) {
    case "Stack":
      return <StackVisualizer />;
    case "Queue":
      return <QueueVisualizer />;
    case "Binary Search":
      return <BinarySearchVisualizer />;
    case "Graph":
      return <GraphVisualizer />;
    case "Recursion":
      return <RecursionVisualizer />;
    default:
      return <p>No visualizer available for this concept yet.</p>;
  }
}
