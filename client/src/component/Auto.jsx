import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Auto(props) {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [props.name1, props.name2],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  },);

  return (
    <div className="auto-input">
      <h1><span ref={el}></span></h1>
    </div>
  );
}
