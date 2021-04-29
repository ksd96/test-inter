import { useEffect, useState, useRef, useCallback } from "react";
import Magnifier from "../../components/Magnifier/Magnifier";

const MagnifierContainer = () => {
  const [stateMagnifer, setStateMagnifer] = useState({text: "", x: 0, y: 0});
  const magnifer = useRef(null);

  const openMagnifer = useCallback((evt) => {
    setStateMagnifer({
      text: evt.target.innerText,
      x: evt.clientX,
      y: evt.clientY
    });
  }, []);

  const closeMagnifer = useCallback(() => {
    setStateMagnifer({
      text: "",
      x: 0,
      y: 0
    });
  }, []);

  const initMagnifer = useCallback((evt) => {
    const arr = [`p`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `span`, `a`, `button`];

    if (arr.includes(evt.target.nodeName.toLowerCase()) && evt.target.innerText) {
      const timer = setTimeout(() => {
        openMagnifer(evt);
        magnifer.current.addEventListener("mousemove", () => {
          window.removeEventListener("mousemove", initMagnifer);
        });
        magnifer.current.addEventListener("mouseout", () => {
          window.addEventListener("mousemove", initMagnifer);
        });
      }, 1000);
      evt.target.addEventListener("mouseout", () => {
        clearTimeout(timer);
      });
    } else {
      closeMagnifer()
    }
  }, [openMagnifer, closeMagnifer]);

  useEffect(() => {
    window.addEventListener("mousemove", initMagnifer);
  }, [initMagnifer]);

  return (
    <Magnifier refEl={magnifer} text={stateMagnifer.text} x={stateMagnifer.x} y={stateMagnifer.y} />
  )
};

export default MagnifierContainer;
