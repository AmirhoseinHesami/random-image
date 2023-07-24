import { memo, useContext } from "react";
import ImageContext from "./ImageContext";

const conf = {
  magnifierHeight: 100,
  magnifieWidth: 100,
  zoomLevel: 1.5,
};

function Magnifier({ imgHeight, imgWidth, x, y }) {
  const { image, imageStyle } = useContext(ImageContext);

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

        height: `${conf.magnifierHeight}px`,
        width: `${conf.magnifieWidth}px`,

        top: `${y - conf.magnifierHeight / 2}px`,
        left: `${x - conf.magnifieWidth / 2}px`,

        backgroundImage: `url('${image}')`,
        filter: imageStyle,

        backgroundSize: `${imgWidth * conf.zoomLevel}px ${
          imgHeight * conf.zoomLevel
        }px`,

        backgroundPositionX: `${
          -x * conf.zoomLevel + conf.magnifieWidth / 2
        }px`,
        backgroundPositionY: `${
          -y * conf.zoomLevel + conf.magnifierHeight / 2
        }px`,
      }}
    ></div>
  );
}

export default memo(Magnifier);
