import {
  Center,
  AbsoluteCenter,
  CardBody,
  Card,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import useImage from "../hooks/useImage";
import { VscColorMode } from "react-icons/vsc";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import ImageCardSkeleton from "./ImageCardSkeleton";
import ImageCardContainer from "./ImageCardContainer";
import { useState } from "react";
import { useAppContext } from "./AppContext";
import { useColorMode } from "@chakra-ui/react";
import Error from "./Error";
import ImageMagnifier from "./ImageMagnifier";

function ImageCard() {
  const { selectedCategory, reload } = useAppContext();
  const { image, error, isLoading } = useImage(selectedCategory, reload);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const { colorMode } = useColorMode();

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
  };

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
                <ImageMagnifier src={image} imageStyle={imageStyle} />
              </CardBody>
              <CardFooter justifyContent={"space-between"}>
                <Button
                  marginRight="10px"
                  leftIcon={<AiOutlineTrademarkCircle />}
                >
                  Watermark
                </Button>
                <Button
                  rightIcon={<VscColorMode />}
                  onClick={toggleGrayscale}
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
