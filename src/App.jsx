import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipeChoicePage } from "./pages/RecipeChoicePage.jsx";
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [useMeal, setUserMeal] = useState();

  return (
    <Box backgroundColor="blue.500" minHeight="100vh" padding="4" w="100%">
      {useMeal ? (
        <RecipeChoicePage meal={useMeal} clickFn={setUserMeal} />
      ) : (
        <>
          <RecipeListPage clickFn={setUserMeal} />
        </>
      )}
    </Box>
  );
};
