import { useState, useCallback, useContext } from "react";
import ImageContext from "./ImageContext";
import Magnifier from "./Magnifier";

function Image() {
  const { image, imageStyle } = useContext(ImageContext);
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
    <div className="image-magnifier-container">
      <img
        src={image}
        style={{ filter: imageStyle }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        alt={"Random Image"}
      />
      {showMagnifier && <Magnifier {...{ imgHeight, imgWidth, x, y }} />}
    </div>
  );
}

export default Image;
