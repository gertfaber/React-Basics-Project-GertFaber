import { data } from "../utils/data";
import { MealCardComp } from "../components/MealCardComp.jsx";
import { useState } from "react";
import { Center, Heading, Grid, Box, Input } from "@chakra-ui/react";

export const RecipeListPage = ({ clickFn }) => {
  const meals = data.hits;

  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
    // console.log("TEXT input");
  };

  const matchedMeals = meals.filter((meal) => {
    return meal.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <Box flexDir="column" maxW="1500px" mx="auto">
        <Center flexDir="column">
          <Heading paddingBottom="4">Gert's Recepe Finder</Heading>

          <Box paddingBottom="4">
            <Input
              p="2"
              bg="white"
              type="text"
              padding="10px"
              placeholder="Search meals"
              onChange={handleChange}
            />
          </Box>
        </Center>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
            "2xl": "repeat(5, 1fr)",
          }}
          gap="2"
        >
          {matchedMeals.map((meal) => (
            <MealCardComp
              key={meal.label}
              meal={meal.recipe}
              clickFn={clickFn}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};
