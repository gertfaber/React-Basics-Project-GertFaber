import { Heading, Text, Image, Card, CardBody, Button } from "@chakra-ui/react";
import { DisplayLabelsCompUI } from "./ui/displayLabelsCompUI";

export const MealCardComp = ({ meal, clickFn }) => {
  // console.log(meal);

  const vegLabels = meal.healthLabels.filter((label) => label.includes("Veg"));

  return (
    <Card bg="gray.100">
      <CardBody textAlign="center" borderRadius="lg">
        <Image
          src={meal.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w={"100%"}
          h="200px"
          objectFit="cover"
        />
        <Text size="md" color="grey">
          {meal.mealType[0].toUpperCase()}
        </Text>

        <Heading size="md">{meal.label}</Heading>

        <DisplayLabelsCompUI
          labels={vegLabels}
          bg="purple.200"
          justify="center"
          fontSize={12}
        />

        <DisplayLabelsCompUI
          labels={meal.dietLabels}
          bg="green.200"
          justify="center"
          fontSize={12}
        />

        <Text>
          Dish:{" "}
          <Text as="span" fontWeight="bold">
            {meal.dishType[0].charAt(0).toUpperCase() +
              meal.dishType[0].slice(1)}
          </Text>
        </Text>

        <Text>Cautions:</Text>

        <DisplayLabelsCompUI
          labels={meal.cautions}
          bg="red.200"
          justify="center"
          fontSize={12}
        />
      </CardBody>

      <Button
        border="1px solid"
        bg="white"
        margin="1"
        onClick={() => clickFn(meal)}
      >
        Select Meal
      </Button>
    </Card>
  );

  // );
};
