import { motion } from 'framer-motion';

export const AnimatedBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Blob */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 bg-gold/30"
        animate={{
          x: [0, 40, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{ willChange: "transform" }}
      />
      
      {/* Middle Right Blob */}
      <motion.div
        className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full mix-blend-multiply filter blur-[100px] opacity-50 bg-blush/60"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
        style={{ willChange: "transform" }}
      />

      {/* Bottom Center Blob */}
      <motion.div
        className="absolute bottom-[-10%] left-[30%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 bg-nude/80"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
        style={{ willChange: "transform" }}
      />
    </div>
  );
};
