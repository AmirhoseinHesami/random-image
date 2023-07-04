import {
  Center,
  AbsoluteCenter,
  CardBody,
  Image,
  Card,
  CardFooter,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import useImage from "../hooks/useImage";
import { VscColorMode } from "react-icons/vsc";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import ImageCardSkeleton from "./ImageCardSkeleton";

function ImageCard() {
  const { image, error, isLoading } = useImage();

  if (error) return <Text>{error}</Text>;

  return (
    <Center>
      <AbsoluteCenter>
        {isLoading ? (
          <ImageCardSkeleton />
        ) : (
          <Card>
            <CardBody padding={3}>
              <Image src={image} borderRadius={"10px"}></Image>
            </CardBody>
            <CardFooter justifyContent={"space-between"}>
              <Button
                marginRight="10px"
                leftIcon={<AiOutlineTrademarkCircle />}
              >
                Watermark
              </Button>
              <Button rightIcon={<VscColorMode />}>Grayscale</Button>
            </CardFooter>
          </Card>
        )}
      </AbsoluteCenter>
    </Center>
  );
}

export default ImageCard;
