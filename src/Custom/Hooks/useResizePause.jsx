import { useEffect, useState } from "react";

function useResizePause(delay = 200) {
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    let timer;

    const onResize = () => {
      setResizing(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setResizing(false);
      }, delay);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [delay]);

  return resizing;
}

export default useResizePause;
