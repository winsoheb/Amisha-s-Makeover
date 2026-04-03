import { motion } from 'framer-motion';

export const LipstickSVG = ({ className }) => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 200" 
    className={className}
    animate={{ 
      y: [0, -20, 0], 
      rotate: [-5, 5, -5],
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    style={{ willChange: "transform", filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.1))" }}
  >
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e6c86e" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#aa8822" />
      </linearGradient>
      <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#bf203e" />
        <stop offset="100%" stopColor="#7a1024" />
      </linearGradient>
      <linearGradient id="darkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#333" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
    </defs>
    
    {/* Base */}
    <rect x="30" y="120" width="40" height="80" rx="4" fill="url(#darkGrad)" />
    {/* Twist mechanism rings */}
    <rect x="28" y="110" width="44" height="10" rx="2" fill="url(#goldGrad)" />
    <rect x="32" y="90" width="36" height="20" fill="url(#goldGrad)" />
    
    {/* Lipstick bullet */}
    <path d="M 38 90 L 38 40 C 38 25, 45 10, 62 10 L 62 90 Z" fill="url(#redGrad)" />
    
    {/* Shine effect */}
    <path d="M 42 85 L 42 42 C 42 30, 46 22, 54 18 L 54 85 Z" fill="rgba(255,255,255,0.15)" />
    <rect x="35" y="125" width="4" height="70" fill="rgba(255,255,255,0.1)" />
  </motion.svg>
);

export const BrushSVG = ({ className }) => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 200" 
    className={className}
    animate={{ 
      y: [0, 25, 0], 
      rotate: [15, 5, 15],
    }}
    transition={{ 
      duration: 7, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: 1
    }}
    style={{ willChange: "transform", filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.1))" }}
  >
    <defs>
      <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#aa8822" />
        <stop offset="50%" stopColor="#e6c86e" />
        <stop offset="100%" stopColor="#d4af37" />
      </linearGradient>
      <linearGradient id="brushGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#222" />
        <stop offset="60%" stopColor="#555" />
        <stop offset="100%" stopColor="#888" />
      </linearGradient>
      <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#e8cfdf" />
        <stop offset="100%" stopColor="#c5a9ba" />
      </linearGradient>
    </defs>
    
    {/* Handle */}
    <path d="M 40 100 L 45 190 C 45 195, 55 195, 55 190 L 60 100 Z" fill="url(#handleGrad)" />
    
    {/* Ferrule (Metal part) */}
    <rect x="38" y="70" width="24" height="30" rx="2" fill="url(#goldGrad2)" />
    <line x1="38" y1="80" x2="62" y2="80" stroke="#aa8822" strokeWidth="1" />
    <line x1="38" y1="90" x2="62" y2="90" stroke="#aa8822" strokeWidth="1" />
    
    {/* Bristles */}
    <path d="M 38 70 C 25 30, 30 10, 50 10 C 70 10, 75 30, 62 70 Z" fill="url(#brushGrad)" />
    
    {/* Highlights */}
    <rect x="42" y="72" width="2" height="26" fill="rgba(255,255,255,0.4)" />
    <path d="M 45 70 C 35 40, 42 20, 50 12 C 55 20, 50 40, 52 70 Z" fill="rgba(255,255,255,0.05)" />
  </motion.svg>
);
