export default function RecursionVisualizer() {
    return (
      <div>
        <h3 className="font-semibold mb-3 text-lg">Recursion</h3>
  
        <p className="text-sm text-gray-600">
          A function calling itself until a base case is reached.
        </p>
  
        <div className="mt-4 space-y-3">
          <div className="p-3 bg-purple-200 rounded-lg">call(3)</div>
          <div className="p-3 bg-purple-200 rounded-lg ml-4">call(2)</div>
          <div className="p-3 bg-purple-200 rounded-lg ml-8">call(1)</div>
          <div className="p-3 bg-purple-200 rounded-lg ml-12">return</div>
        </div>
      </div>
    );
  }
  