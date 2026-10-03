import React, { useEffect, useRef } from 'react';

/**
 * HeroCanvas — Subtle Constellation & Orbital Vector Visual
 * 
 * Minimal, lightweight 60fps canvas engine.
 * Renders delicate orbital paths and calm constellation nodes in sophisticated
 * lavender/indigo and soft blue tones. Reacts smoothly to cursor proximity.
 * Avoids aggressive neon, glowing shaders, or heavy 3D objects.
 */
export const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse coordinates
    const mouse = {
      x: width * 0.7,
      y: height * 0.45,
      targetX: width * 0.7,
      targetY: height * 0.45,
      isHovering: false,
      radius: 120,
    };

    // Responsive node density
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 38);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.5 + 1.0,
        alpha: Math.random() * 0.4 + 0.2,
        isPurple: Math.random() > 0.4,
      });
    }

    let orbitalAngle = 0;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
    };

    window.addEventListener('resize', handleResize);
    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      if (!prefersReducedMotion) {
        orbitalAngle += 0.002;
      }

      // 1. Subtle, delicate orbital rings around right side focal center
      const centerX = width > 768 ? width * 0.72 : width * 0.5;
      const centerY = height * 0.5;
      const rings = [90, 150, 220];

      ctx.save();
      for (let i = 0; i < rings.length; i++) {
        const radius = rings[i];
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = i === 1 ? 'rgba(167, 139, 250, 0.07)' : 'rgba(255, 255, 255, 0.035)';
        ctx.lineWidth = 1;
        ctx.setLineDash(i === 0 ? [3, 8] : i === 2 ? [6, 12] : []);
        ctx.stroke();

        // Small satellite indicator on the middle orbit
        if (i === 1) {
          const satX = centerX + Math.cos(orbitalAngle * (i % 2 === 0 ? 1 : -1)) * radius;
          const satY = centerY + Math.sin(orbitalAngle * (i % 2 === 0 ? 1 : -1)) * radius;
          ctx.beginPath();
          ctx.arc(satX, satY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(167, 139, 250, 0.65)';
          ctx.fill();
        }
      }
      ctx.restore();

      // 2. Nodes and constellation connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          if (mouse.isHovering) {
            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const force = (1 - dist / mouse.radius) * 0.6;
              node.x -= (dx / dist) * force * 2;
              node.y -= (dy / dist) * force * 2;
            }
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.isPurple
          ? `rgba(167, 139, 250, ${node.alpha * 0.6})`
          : `rgba(226, 232, 240, ${node.alpha * 0.4})`;
        ctx.fill();

        // Connect nearby nodes with delicate lines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            const lineAlpha = (1 - dist / 105) * 0.12;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas && canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas-layer"
      aria-hidden="true"
    />
  );
};
