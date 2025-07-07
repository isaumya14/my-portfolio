import React, { useEffect, useRef, useState } from "react";

const MouseGlow = () => {
  const canvasRef = useRef(null);
  const [isMoving, setIsMoving] = useState(false);
  const trailPoints = useRef([]);
  const rafId = useRef(null);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      const point = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        opacity: 1,
      };

      trailPoints.current.push(point);
      if (trailPoints.current.length > 20) trailPoints.current.shift();

      setIsMoving(true);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setIsMoving(false), 200);
    };

    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trailPoints.current.length < 2) return;

      const now = Date.now();
      trailPoints.current = trailPoints.current
        .map((point) => ({
          ...point,
          opacity: Math.max(0, 1 - (now - point.timestamp) / 500),
        }))
        .filter((point) => point.opacity > 0);

      if (trailPoints.current.length < 2) return;

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 1; i < trailPoints.current.length; i++) {
        const prev = trailPoints.current[i - 1];
        const curr = trailPoints.current[i];

        const progress = i / trailPoints.current.length;
        const width = 8 * (1 - progress * 0.5);
        const opacity = curr.opacity * (isMoving ? 1 : 0.3);

        const gradient = ctx.createLinearGradient(prev.x, prev.y, curr.x, curr.y);
        gradient.addColorStop(0, `rgba(199, 21, 133, ${opacity * 0.8})`); // dark pink
        gradient.addColorStop(0.5, `rgba(219, 112, 147, ${opacity})`);   // medium pink
        gradient.addColorStop(1, `rgba(199, 21, 133, ${opacity * 0.6})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = width;

        ctx.shadowColor = "rgba(199, 21, 133, 0.5)";
        ctx.shadowBlur = width * 2;

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);

        if (i < trailPoints.current.length - 1) {
          const next = trailPoints.current[i + 1];
          const cpx = (curr.x + next.x) / 2;
          const cpy = (curr.y + next.y) / 2;
          ctx.quadraticCurveTo(curr.x, curr.y, cpx, cpy);
        } else {
          ctx.lineTo(curr.x, curr.y);
        }

        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Glow at cursor
      if (isMoving && trailPoints.current.length > 0) {
        const last = trailPoints.current[trailPoints.current.length - 1];

        const glow = ctx.createRadialGradient(last.x, last.y, 0, last.x, last.y, 18);
        glow.addColorStop(0, "rgba(199, 21, 133, 0.6)");
        glow.addColorStop(0.5, "rgba(255, 192, 203, 0.3)");
        glow.addColorStop(1, "rgba(199, 21, 133, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(last.x, last.y, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255, 182, 193, 0.6)";
        ctx.beginPath();
        ctx.arc(last.x, last.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      drawTrail();
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [isMoving]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{
        width: "100vw",
        height: "100vh",
        filter: "blur(1px) brightness(1.2) contrast(1.4)",
      }}
    />
  );
};

export default MouseGlow;
