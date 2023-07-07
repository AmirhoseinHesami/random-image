import { useState } from "react";

function ImageMagnifier({
  src,
  imageStyle,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1.5,
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={src}
        style={{
          borderRadius: "10px",
          filter: imageStyle,
        }}
        onMouseEnter={(e) => {
          const element = e.currentTarget;
          const { width, height } = element.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          const x = e.pageX - left - window.scrollX;
          const y = e.pageY - top - window.scrollY;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",

          pointerEvents: "none",
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,

          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1",
          border: "2px solid lightgray",
          borderRadius: "50%",
          backgroundColor: "transparent",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          filter: imageStyle,

          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  );
}

export default ImageMagnifier;
