import {
  Center,
  AbsoluteCenter,
  CardBody,
  Image,
  Card,
  CardFooter,
  Button,
  Text,
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

function ImageCard() {
  const { selectedCategory, reload } = useAppContext();
  const { image, error, isLoading } = useImage(selectedCategory, reload);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const { colorMode } = useColorMode();

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
  };

  const imageStyle = {
    filter: isGrayscale ? "grayscale(100%)" : "none",
  };

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
                backgroundColor: colorMode === "light" ? "#ddd" : "#202020",
              }}
            >
              <CardBody padding={3}>
                <Image
                  src={image}
                  style={imageStyle}
                  borderRadius={"10px"}
                ></Image>
              </CardBody>
              <CardFooter justifyContent={"space-between"}>
                <Button
                  marginRight="10px"
                  leftIcon={<AiOutlineTrademarkCircle />}
                >
                  Watermark
                </Button>
                <Button rightIcon={<VscColorMode />} onClick={toggleGrayscale}>
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
