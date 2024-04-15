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
      isClient() && setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    isClient() && window.addEventListener("resize", updateSize);
    updateSize();
    if(isClient()) {
      return () => window.removeEventListener("resize", updateSize);
    }
    return
  }, []);
  return size;
}
