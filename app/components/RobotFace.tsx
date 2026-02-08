"use client";

import { useEffect, useRef } from "react";

export default function RobotFace() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      const scaleX = 400 / rect.width;
      const scaleY = 400 / rect.height;
      
      const mouseX = (e.clientX - rect.left) * scaleX;
      const mouseY = (e.clientY - rect.top) * scaleY;

      const leftPupil = svg.querySelector("#left-pupil") as SVGGElement;
      const rightPupil = svg.querySelector("#right-pupil") as SVGGElement;
      
      if (leftPupil && rightPupil) {
        const leftDx = mouseX - 140;
        const leftDy = mouseY - 180;
        const leftAngle = Math.atan2(leftDy, leftDx);
        const leftDist = Math.min(Math.sqrt(leftDx * leftDx + leftDy * leftDy), 100);
        const leftMove = (leftDist / 100) * 15;
        
        leftPupil.style.transform = `translate(${Math.cos(leftAngle) * leftMove}px, ${Math.sin(leftAngle) * leftMove}px)`;

        const rightDx = mouseX - 260;
        const rightDy = mouseY - 180;
        const rightAngle = Math.atan2(rightDy, rightDx);
        const rightDist = Math.min(Math.sqrt(rightDx * rightDx + rightDy * rightDy), 100);
        const rightMove = (rightDist / 100) * 15;
        
        rightPupil.style.transform = `translate(${Math.cos(rightAngle) * rightMove}px, ${Math.sin(rightAngle) * rightMove}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg 
      ref={svgRef}
      width="300" 
      height="300" 
      viewBox="0 0 400 400" 
      className="drop-shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:drop-shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105"
    >
      {/* Antenna */}
      <g style={{ transformOrigin: "200px 80px", animation: "wiggle 3s ease-in-out infinite" }}>
        <line x1="200" y1="120" x2="200" y2="60" stroke="#374151" strokeWidth="8" strokeLinecap="round"/>
        <circle cx="200" cy="50" r="15" fill="#06b6d4" style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}/>
      </g>

      {/* Head */}
      <rect x="80" y="100" width="240" height="220" rx="60" fill="#1f2937" stroke="#374151" strokeWidth="4"/>

      {/* Left Eye */}
      <g style={{ transformOrigin: "140px 180px", animation: "blink 4s infinite" }}>
        <circle cx="140" cy="180" r="45" fill="#111827" stroke="#374151" strokeWidth="3"/>
        <circle cx="140" cy="180" r="35" fill="#f3f4f6"/>
        <g id="left-pupil" className="transition-transform duration-100">
          <circle cx="140" cy="180" r="18" fill="#1f2937"/>
          <circle cx="140" cy="180" r="8" fill="#06b6d4" style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}/>
          <circle cx="145" cy="175" r="4" fill="white" opacity="0.8"/>
        </g>
      </g>

      {/* Right Eye */}
      <g style={{ transformOrigin: "260px 180px", animation: "blink 4s infinite 0.1s" }}>
        <circle cx="260" cy="180" r="45" fill="#111827" stroke="#374151" strokeWidth="3"/>
        <circle cx="260" cy="180" r="35" fill="#f3f4f6"/>
        <g id="right-pupil" className="transition-transform duration-100">
          <circle cx="260" cy="180" r="18" fill="#1f2937"/>
          <circle cx="260" cy="180" r="8" fill="#06b6d4" style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}/>
          <circle cx="265" cy="175" r="4" fill="white" opacity="0.8"/>
        </g>
      </g>

      {/* Mouth */}
      <path d="M 160 260 Q 200 280 240 260" stroke="#06b6d4" strokeWidth="4" strokeLinecap="round" fill="none"/>
    </svg>
  );
}