// BeautifulLoader.jsx
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="relative w-16 h-16">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute w-4 h-4 bg-blue-500 rounded-full"
            animate={{
              rotate: 360,
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              },
            }}
            style={{
              top: "50%",
              left: "50%",
              marginTop: -8,
              marginLeft: -8,
              transformOrigin: "0 0",
            }}
          />
        ))}
      </div>
    </div>
  );
}
