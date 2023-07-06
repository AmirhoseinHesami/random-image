import {
  Card,
  Skeleton,
  CardBody,
  CardFooter,
  SkeletonCircle,
  useColorMode,
} from "@chakra-ui/react";

function ImageCardSkeleton() {
  const { colorMode } = useColorMode();

  return (
    <Card
      style={{
        backgroundColor: colorMode === "light" ? "#d7d7d7" : "#202020",
      }}
    >
      <CardBody>
        <Skeleton h={["205px", "280px", "355px"]} borderRadius={"10px"} />
      </CardBody>
      <CardFooter justifyContent={"space-between"}>
        <SkeletonCircle />
        <SkeletonCircle />
      </CardFooter>
    </Card>
  );
}

export default ImageCardSkeleton;
