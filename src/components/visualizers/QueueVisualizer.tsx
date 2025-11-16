export default function QueueVisualizer() {
    return (
      <div>
        <h3 className="font-semibold mb-3 text-lg">Queue (FIFO)</h3>
        <div className="flex space-x-3">
          {["A", "B", "C"].map((i) => (
            <div
              key={i}
              className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center shadow"
            >
              {i}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">First In → First Out</p>
      </div>
    );
  }
  