import React, { useRef, useEffect } from 'react';

type Point = {
  x: number;
  y: number;
  initialY: number;
  radius: number;
  opacity: number;
  parallax: number;
};

const BrightParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const resizeTimeoutRef = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let themeColors = getThemeColors();

    function getThemeColors() {
      if (typeof window === 'undefined') {
          return { primaryRgbValues: [37, 99, 235] };
      }
      const styles = getComputedStyle(document.documentElement);
      const primaryRgb = styles.getPropertyValue('--primary-rgb').trim();
      return {
        primaryRgbValues: primaryRgb.length > 0 ? primaryRgb.split(' ').map(Number) : [37, 99, 235],
      };
    }
    
    function setup() {
      if (!canvas || !ctx) return;
      
      const dpr = window.devicePixelRatio || 1;
      const newHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, window.innerHeight);
      
      canvas.width = window.innerWidth * dpr;
      canvas.height = newHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${newHeight}px`;
      ctx.scale(dpr, dpr);
      
      const unscaledWidth = window.innerWidth;
      const unscaledHeight = newHeight;
      
      pointsRef.current = [];
      const pointCount = Math.floor((unscaledWidth * unscaledHeight) / 6000); 

      for (let i = 0; i < pointCount; i++) {
        const radius = Math.random() * 2.5 + 0.5; // from 0.5px to 3px
        const initialY = Math.random() * unscaledHeight;
        pointsRef.current.push({
            x: Math.random() * unscaledWidth,
            y: initialY,
            initialY: initialY,
            radius: radius,
            opacity: Math.random() * 0.5 + 0.15, // Subtle, less overpowering opacity
            parallax: 0.1 + (radius / 3) * 0.4, // Parallax factor from 0.1 to ~0.5
        });
      }
    }

    function animate() {
        if (!ctx || !canvas) return;
        const scrollTop = window.scrollY;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const [r, g, b] = themeColors.primaryRgbValues;
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

        pointsRef.current.forEach(p => {
            // Update y-position based on scroll and parallax factor
            p.y = p.initialY - scrollTop * p.parallax;

            // Infinitely wrap particles that scroll off-screen
            if (p.y < -p.radius) {
                p.initialY += canvasHeight + p.radius * 2;
                p.y = p.initialY - scrollTop * p.parallax;
            } else if (p.y > canvasHeight + p.radius) {
                p.initialY -= (canvasHeight + p.radius * 2);
                p.y = p.initialY - scrollTop * p.parallax;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
            ctx.fill();
        });

        animationFrameId.current = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
        animate();
    }

    function handleResize() {
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = window.setTimeout(() => {
          setup();
          // The animation loop will pick up the new particles on its next frame
      }, 150);
    }
    
    setup();
    startAnimation();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.body);

    const mutationObserver = new MutationObserver((mutations) => {
        const themeChanged = mutations.some(m => m.attributeName === 'class' || m.attributeName === 'style');
        if (themeChanged) {
            themeColors = getThemeColors();
        }
    });
    mutationObserver.observe(document.documentElement, { attributes: true });

    return () => {
      if (resizeTimeoutRef.current) {
        window.clearTimeout(resizeTimeoutRef.current);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: 'none' }} />;
};

export default BrightParticleBackground;