export default function BinarySearchVisualizer() {
    return (
      <div>
        <h3 className="font-semibold mb-3 text-lg">Binary Search</h3>
        <p className="text-gray-600 text-sm">
          Repeatedly split the sorted array in half.
        </p>
  
        <div className="mt-4 grid grid-cols-7 gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <div key={n} className="p-2 rounded bg-green-200 text-center">
              {n}
            </div>
          ))}
        </div>
      </div>
    );
  }
  