import {
  GetRecipeQueryResponse,
  PageResponseRecipeDto,
} from "@/app/_generated";

// Der Browser ruft das Backend direkt auf, unter demselben Origin, von dem
// Spring Boot auch die SPA ausliefert.

export async function fetchRecipes() {
  const response = await fetch("/api/recipes?page=0&size=6&sort=createdAt");
  return PageResponseRecipeDto.parse(await response.json());
}

export async function fetchRecipe(recipeId: string) {
  const response = await fetch(`/api/recipes/${recipeId}`);
  return GetRecipeQueryResponse.parse(await response.json());
}
