import { motion } from "framer-motion";

export default function StackVisualizer() {
  const items = ["A", "B", "C"]; // top is C

  return (
    <div>
      <h3 className="font-semibold mb-3 text-lg">Stack (LIFO)</h3>

      <div className="flex flex-col-reverse items-center space-y-2 space-y-reverse">
        {items.map((i) => (
          <motion.div
            key={i}
            className="w-32 h-10 bg-pink-200 rounded-lg flex items-center justify-center shadow-sm"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {i}
          </motion.div>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-600">Last In → First Out</p>
    </div>
  );
}
