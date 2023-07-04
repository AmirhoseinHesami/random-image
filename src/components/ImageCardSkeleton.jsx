import {
  Card,
  Skeleton,
  SkeletonText,
  CardBody,
  CardFooter,
  SkeletonCircle,
  useColorMode,
} from "@chakra-ui/react";

function ImageCardSkeleton() {
  const { colorMode } = useColorMode();

  return (
    <Card
      style={{ backgroundColor: colorMode === "light" ? "#ddd" : "#202020" }}
    >
      <CardBody>
        <Skeleton height={"250px"} borderRadius={"10px"} />
      </CardBody>
      <CardFooter justifyContent={"space-between"}>
        <SkeletonCircle />
        <SkeletonCircle />
      </CardFooter>
    </Card>
  );
}

export default ImageCardSkeleton;
