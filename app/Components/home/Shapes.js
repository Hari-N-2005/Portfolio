import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const floatVariants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 15, -15, 0],
    transition: {
      y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

const shapeList = [
  { id: "circle", svg: <circle cx="50" cy="50" r="40" fill="hsl(270,80%,40%)" />, top: "10vh", left: "5vw" },
  { id: "triangle", svg: <polygon points="50,10 90,90 10,90" fill="hsl(290,80%,45%)" />, top: "20vh", left: "80vw" },
  { id: "star", svg: <polygon points="50,10 60,40 90,40 65,60 75,90 50,70 25,90 35,60 10,40 40,40" fill="hsl(310,80%,45%)" />, top: "65vh", left: "15vw" },
  { id: "zigzag", svg: <polyline points="10,10 30,30 50,10 70,30 90,10" stroke="hsl(280,80%,40%)" strokeWidth="5" fill="none" />, top: "75vh", left: "75vw" },
  { id: "blob", svg: <path d="M42.8,-59.6C53.9,-51.2,..." fill="hsl(300,80%,35%)" transform="translate(50 50)" />, top: "35vh", left: "55vw" },
  { id: "square", svg: <rect x="10" y="10" width="80" height="80" fill="hsl(250,80%,50%)" />, top: "5vh", left: "60vw" },
  { id: "hexagon", svg: <polygon points="50,5 90,27 90,72 50,95 10,72 10,27" fill="hsl(280,80%,50%)" />, top: "80vh", left: "25vw" },
  { id: "circleOutline", svg: <circle cx="50" cy="50" r="40" stroke="hsl(260,80%,50%)" strokeWidth="8" fill="none" />, top: "50vh", left: "90vw" },
  { id: "cross", svg: <g transform="translate(50,50)"><line x1="-30" y1="0" x2="30" y2="0" stroke="hsl(300,80%,40%)" strokeWidth="8"/><line x1="0" y1="-30" x2="0" y2="30" stroke="hsl(300,80%,40%)" strokeWidth="8"/></g>, top: "85vh", left: "10vw" },
];

const Shapes = () => {
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setXOffset((e.clientX - innerWidth / 2) / 30);
      setYOffset((e.clientY - innerHeight / 2) / 30);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="shapes" style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}>
      {shapeList.map((shape, i) => (
        <motion.svg
          key={shape.id}
          width="10vw"
          height="10vw"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          variants={floatVariants}
          animate="animate"
          style={{
            position: "absolute",
            top: shape.top,
            left: shape.left,
            transform: `translate(${xOffset * (i % 2 ? 1 : -1)}px, ${yOffset * (i % 3 ? 1 : -1)}px)`,
            opacity: 0.75,
            pointerEvents: "none",
          }}
        >
          {shape.svg}
        </motion.svg>
      ))}
    </div>
  );
};

export default Shapes;
