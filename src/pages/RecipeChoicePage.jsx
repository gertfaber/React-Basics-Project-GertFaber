import {
  Heading,
  Text,
  Grid,
  Image,
  Card,
  CardBody,
  Button,
  Box,
} from "@chakra-ui/react";
import { DisplayLabelsCompUI } from "../components/ui/displayLabelsCompUI";

export const RecipeChoicePage = ({ meal, clickFn }) => {
  // console.log(meal);
  const energy = Math.round(meal.totalNutrients.ENERC_KCAL.quantity);
  const protein = Math.round(meal.totalNutrients.PROCNT.quantity);
  const fat = Math.round(meal.totalNutrients.FAT.quantity);
  const carbs = Math.round(meal.totalNutrients.CHOCDF.quantity);
  const cholesterol = Math.round(meal.totalNutrients.CHOLE.quantity);
  const sodium = Math.round(meal.totalNutrients.NA.quantity);

  return (
    <Box
      key={meal.label}
      padding="4"
      width="100%"
      borderColor="gray.300"
      maxW="900px"
      mx="auto"
    >
      <Button
        border="1px solid"
        bg="white"
        margin="1"
        onClick={() => clickFn()}
        marginBottom="2"
      >
        go back to main menu
      </Button>
      <Card bg="gray.200" color="gray.800">
        <CardBody>
          <Image
            src={meal.image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            h="400px"
            w={"100%"}
            objectFit="cover"
          />

          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
            }}
            gap={4}
          >
            <Box textAlign="left" p={4}>
              <Text padding="1">{meal.mealType[0].toUpperCase()}</Text>

              <Heading fontSize="30" padding="1">
                {meal.label}
              </Heading>

              <Text padding="1">
                Total cooking time: {meal.totalTime} Minutes
              </Text>

              <Text padding="1">Servings: {meal.yield}</Text>

              <Heading fontSize="18px" padding="1" marginTop="2">
                Ingredients:
              </Heading>
              {meal.ingredients.map((ingredient) => (
                <Text padding="1" key={ingredient.text}>
                  - {ingredient.text}
                </Text>
              ))}
            </Box>

            <Box textAlign="left" p={4}>
              <Heading fontSize="18px" padding="1" marginTop="2">
                Health Labels:
              </Heading>

              <DisplayLabelsCompUI labels={meal.healthLabels} bg="purple.200" />

              <Heading fontSize="18px" padding="1" marginTop="2">
                Diet:
              </Heading>
              <DisplayLabelsCompUI labels={meal.dietLabels} bg="green.200" />

              <Heading fontSize="18px" padding="1" marginTop="2">
                Cautions:
              </Heading>
              <DisplayLabelsCompUI labels={meal.cautions} bg="red.200" />

              <Heading fontSize="18px" padding="1" marginTop="2">
                Nutrients:
              </Heading>
              <Text padding="1">- Energy: {energy + " kcal"}</Text>
              <Text padding="1">- Protein: {protein + " g"}</Text>
              <Text padding="1">- Fat: {fat + " g"}</Text>
              <Text padding="1">- Carbs: {carbs + " g"}</Text>
              <Text padding="1">- Cholesterol: {cholesterol + " mg"}</Text>
              <Text padding="1">- Sodium: {sodium + " mg"}</Text>
            </Box>
          </Grid>
        </CardBody>
      </Card>
    </Box>
  );
};
