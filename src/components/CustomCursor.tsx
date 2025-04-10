
import { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function CustomCursor() {
  const { theme } = useTheme();
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Only show custom cursor on devices without touch
    if (window.matchMedia("(pointer: fine)").matches) {
      cursor.style.display = "block";
    } else {
      cursor.style.display = "none";
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [theme]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden"
      style={{ display: "none" }}
    />
  );
}
