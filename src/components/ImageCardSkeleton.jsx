import {
  Card,
  Skeleton,
  SkeletonText,
  CardBody,
  CardFooter,
  SkeletonCircle,
} from "@chakra-ui/react";

function ImageCardSkeleton() {
  return (
    <Card>
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
