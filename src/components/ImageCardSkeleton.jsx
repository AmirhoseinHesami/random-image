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
    <Card className={colorMode === "light" ? "light-card" : "dark-card"}>
      <CardBody>
        <Skeleton h={["200px", "275px", "350px"]} borderRadius={"10px"} />
      </CardBody>
      <CardFooter justifyContent={"space-between"}>
        <SkeletonCircle />
        <SkeletonCircle />
      </CardFooter>
    </Card>
  );
}

export default ImageCardSkeleton;
