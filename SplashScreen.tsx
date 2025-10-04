import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 2000); // 2 seconds splash
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#ffffff", // simple clean white background
      }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent", // no extra circle, clean look
          padding: "0",
        }}
      >
        <img
          src="/logo.png" // your professional logo here
          alt="App Logo"
          style={{ width: "120px", height: "120px" }}
        />
      </motion.div>
    </div>
  );
}
