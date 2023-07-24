import { useState } from "react";

import {
  Center,
  AbsoluteCenter,
  CardBody,
  Card,
  CardFooter,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { VscColorMode } from "react-icons/vsc";
import { AiOutlineTrademarkCircle } from "react-icons/ai";

import { Watermark } from "@hirohe/react-watermark";

import { useAppContext } from "./AppContext";
import ImageContext from "./ImageContext";
import useImage from "../hooks/useImage";
import ImageCardContainer from "./ImageCardContainer";
import ImageCardSkeleton from "./ImageCardSkeleton";
import Image from "./Image";
import Error from "./Error";

function ImageCard() {
  const { selectedCategory, reload } = useAppContext();
  const { image, error, isLoading } = useImage(selectedCategory, reload);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isWatermark, setWatermark] = useState(false);
  const { colorMode } = useColorMode();

  const imageStyle = isGrayscale ? "grayscale(100%)" : "none";
  const ButtonColorScheme = colorMode === "light" ? "cyan" : "linkedin";

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
              className={colorMode === "light" ? "light-card" : "dark-card"}
            >
              <CardBody padding={3}>
                <Watermark
                  text="Watermark"
                  textSize="20"
                  opacity="0.7"
                  gutter="8"
                  show={isWatermark}
                >
                  <ImageContext.Provider value={{ image, imageStyle }}>
                    <Image />
                  </ImageContext.Provider>
                </Watermark>
              </CardBody>
              <CardFooter justifyContent={"space-between"}>
                <Button
                  marginRight="10px"
                  leftIcon={<AiOutlineTrademarkCircle />}
                  onClick={() => setWatermark(!isWatermark)}
                  variant={isWatermark ? "solid" : "outline"}
                  colorScheme={ButtonColorScheme}
                >
                  Watermark
                </Button>
                <Button
                  rightIcon={<VscColorMode />}
                  onClick={() => setIsGrayscale(!isGrayscale)}
                  variant={isGrayscale ? "solid" : "outline"}
                  colorScheme={ButtonColorScheme}
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
