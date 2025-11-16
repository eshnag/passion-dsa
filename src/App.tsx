import { useState } from "react";
import { getAnalogy } from "./utils/openai";
import AlgorithmVisualizer from "./components/AlgorithmVisualizer";

const interests = ["Dance", "Poetry", "Cooking", "Sports", "Gaming", "Music"];
const concepts = ["Stack", "Queue", "Hash Map", "Binary Search", "Recursion", "Graph"];

function App() {
  const [interest, setInterest] = useState("");
  const [concept, setConcept] = useState("");
  const [analogy, setAnalogy] = useState("");
  const [mode, setMode] = useState<"ai" | "fallback" | null>(null);

  const handleGenerate = async () => {
    if (!interest || !concept) return;

    const { text, source } = await getAnalogy(interest, concept);
    setAnalogy(text);
    setMode(source as "ai" | "fallback");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-5xl mx-auto">

      {/* LEFT SIDE — UI */}
      <div>
        <h1 className="text-4xl font-bold mb-2">PassionDSA</h1>
        <p className="text-gray-600 mb-6">Explain CS concepts through what you love.</p>

        {/* Interests */}
        <p className="font-semibold mb-2">1) Pick your interest</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {interests.map((i) => (
            <button
              key={i}
              onClick={() => setInterest(i)}
              className={`px-4 py-2 rounded-full border ${
                interest === i ? "bg-pink-500 text-white" : "bg-white"
              }`}
            >
              {i}
            </button>
          ))}
        </div>

        {/* Concepts */}
        <p className="font-semibold mb-2">2) Choose a concept</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {concepts.map((c) => (
            <button
              key={c}
              onClick={() => setConcept(c)}
              className="border rounded-lg p-3 hover:bg-gray-100"
            >
              {c}
            </button>
          ))}
        </div>

        {/* Generate */}
        <button
          onClick={handleGenerate}
          className="px-5 py-3 bg-black text-white rounded-lg mb-4"
        >
          Generate Analogy ✨
        </button>

        {/* Results */}
        <div className="border rounded-xl p-4 bg-white/60 backdrop-blur shadow-sm">
          {analogy ? (
            <>
              <p>{analogy}</p>
              {mode === "fallback" && (
                <p className="text-yellow-600 text-sm mt-2">⚠️ Offline mode — using default analogy</p>
              )}
              {mode === "ai" && (
                <p className="text-green-600 text-sm mt-2">✨ AI-generated explanation</p>
              )}
            </>
          ) : (
            <p className="text-gray-500">
              pick an interest to get a personalized explanation ✨
            </p>
          )}
        </div>
      </div>

      {/* RIGHT SIDE — VISUALIZER */}
      <div>
        <AlgorithmVisualizer concept={concept} />
      </div>
    </div>
  );
}

export default App;
