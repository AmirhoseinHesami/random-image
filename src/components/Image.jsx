import { useState, useCallback } from "react";
import Magnifier from "./Magnifier";

function Image({
  src,
  imageStyle,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1.5,
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const element = e.currentTarget;
    const { top, left } = element.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  });

  const handleMouseEnter = useCallback((e) => {
    const element = e.currentTarget;
    const { width, height } = element.getBoundingClientRect();

    setSize([width, height]);
    setShowMagnifier(true);
  });

  const handleMouseLeave = useCallback(() => setShowMagnifier(false));

  return (
    <div style={{ position: "relative" }}>
      <img
        src={src}
        style={{ filter: imageStyle }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        alt={"Random Image"}
      />
      {showMagnifier && (
        <Magnifier
          {...{
            magnifieWidth,
            magnifierHeight,
            imageStyle,
            imgHeight,
            imgWidth,
            zoomLevel,
            src,
            x,
            y,
          }}
        />
      )}
    </div>
  );
}

export default Image;
