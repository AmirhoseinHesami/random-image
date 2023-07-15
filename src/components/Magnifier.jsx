import { memo } from "react";

function Magnifier({
  magnifieWidth,
  magnifierHeight,
  imageStyle,
  imgHeight,
  imgWidth,
  zoomLevel,
  src,
  x,
  y,
}) {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        opacity: "1",
        border: "2px solid lightgray",
        borderRadius: "50%",
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",

        height: `${magnifierHeight}px`,
        width: `${magnifieWidth}px`,

        top: `${y - magnifierHeight / 2}px`,
        left: `${x - magnifieWidth / 2}px`,

        backgroundImage: `url('${src}')`,
        filter: imageStyle,

        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,

        backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
      }}
    ></div>
  );
}

export default memo(Magnifier);
