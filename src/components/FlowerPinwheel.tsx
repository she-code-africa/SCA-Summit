import { motion } from "framer-motion";

interface FlowerPinwheelProps {
  className?: string;
  color?: string;
  spin?: boolean;
}

export function FlowerPinwheel({
  className = "w-8 h-8",
  color = "#a3e635",
  spin = false
}: FlowerPinwheelProps) {
  const svg = (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 50C50 30 35 15 20 15C15 30 30 50 50 50Z" fill={color} />
      <path d="M50 50C70 50 85 35 85 20C70 15 50 30 50 50Z" fill={color} />
      <path d="M50 50C50 70 65 85 80 85C85 70 70 50 50 50Z" fill={color} />
      <path d="M50 50C30 50 15 65 15 80C30 85 50 70 50 50Z" fill={color} />
      <circle cx="50" cy="50" r="6" fill="#FFFFFF" />
    </svg>
  );

  if (!spin) return svg;

  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      {svg}
    </motion.div>
  );
}
