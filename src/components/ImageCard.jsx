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

function ImageCard() {
  const { image, error } = useImage();

  return (
    <Center>
      <AbsoluteCenter>
        {!error ? (
          <Card>
            <CardBody>
              <Image src={image}></Image>
            </CardBody>
            <CardFooter justifyContent={"space-between"}>
              <Button marginRight="10px">Watermark</Button>
              <Button>Grayscale</Button>
            </CardFooter>
          </Card>
        ) : (
          <Text>{error}</Text>
        )}
      </AbsoluteCenter>
    </Center>
  );
}

export default ImageCard;
