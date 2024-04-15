import { useLayoutEffect, useState } from "react";
import {isClient} from "@/utils/client";

interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowSize() {
  const [size, setSize] = useState<WindowSize>({ width: 0, height: 0 });
  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
      return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
