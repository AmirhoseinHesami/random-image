import {
  Center,
  AbsoluteCenter,
  CardBody,
  Image,
  Card,
  CardFooter,
  Button,
} from "@chakra-ui/react";

function ImageCard() {
  return (
    <Center>
      <AbsoluteCenter>
        <Card>
          <CardBody>
            <Image></Image>
          </CardBody>
          <CardFooter>
            <Button>Watermark</Button>
            <Button>Grayscale</Button>
          </CardFooter>
        </Card>
      </AbsoluteCenter>
    </Center>
  );
}

export default ImageCard;
