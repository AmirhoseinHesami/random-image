import { useState } from "react";

import {
  Center,
  AbsoluteCenter,
  CardBody,
  Card,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

import { VscColorMode } from "react-icons/vsc";
import { AiOutlineTrademarkCircle } from "react-icons/ai";

import { Watermark } from "@hirohe/react-watermark";

import { useAppContext } from "./AppContext";
import useImage from "../hooks/useImage";
import ImageCardSkeleton from "./ImageCardSkeleton";
import ImageCardContainer from "./ImageCardContainer";
import ImageMagnifier from "./ImageMagnifier";
import Error from "./Error";

function ImageCard() {
  const { selectedCategory, reload } = useAppContext();
  const { image, error, isLoading } = useImage(selectedCategory, reload);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isWatermark, setWatermark] = useState(false);
  const { colorMode } = useColorMode();

  const imageStyle = isGrayscale ? "grayscale(100%)" : "none";

  if (error) return <Error error={error} />;

  return (
    <Center>
      <AbsoluteCenter>
        {isLoading ? (
          <ImageCardContainer>
            <ImageCardSkeleton />
          </ImageCardContainer>
        ) : (
          <ImageCardContainer>
            <Card
              style={{
                backgroundColor: colorMode === "light" ? "#d7d7d7" : "#202020",
              }}
            >
              <CardBody padding={3}>
                <Watermark
                  text="Watermark"
                  textSize="22"
                  opacity="0.6"
                  show={isWatermark}
                >
                  <ImageMagnifier src={image} imageStyle={imageStyle} />
                </Watermark>
              </CardBody>
              <CardFooter justifyContent={"space-between"}>
                <Button
                  marginRight="10px"
                  leftIcon={<AiOutlineTrademarkCircle />}
                  onClick={() => setWatermark(!isWatermark)}
                  variant={isWatermark ? "solid" : "outline"}
                  colorScheme={colorMode === "light" ? "cyan" : "linkedin"}
                >
                  Watermark
                </Button>
                <Button
                  rightIcon={<VscColorMode />}
                  onClick={() => setIsGrayscale(!isGrayscale)}
                  variant={isGrayscale ? "solid" : "outline"}
                  colorScheme={colorMode === "light" ? "cyan" : "linkedin"}
                >
                  Grayscale
                </Button>
              </CardFooter>
            </Card>
          </ImageCardContainer>
        )}
      </AbsoluteCenter>
    </Center>
  );
}

export default ImageCard;
