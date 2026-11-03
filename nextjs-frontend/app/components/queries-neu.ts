import {
  AddFeedbackMutationResponse,
  GetExploreRecipesQueryResponse,
  GetRecipeFeedbacksResponse,
  GetRecipeQueryResponse,
  IncrementLikesMutationResponse,
  NewFeedback,
  PageResponseRecipeDto,
} from "@/app/_generated";
import {
  recipesPerPage,
  slowDown_AddFeedback,
  slowDown_GetExploreRecipes,
  slowDown_GetFeedbacks,
  slowDown_GetRecipe,
  slowDown_GetRecipeList,
  slowDown_IncreaseLikes,
  slowDown_SubscribeNewsletter,
} from "@/app/demo-config.tsx";
import { logRender } from "@/app/components/log-render.ts";

const backendUrl = process.env.BACKEND_URL ?? "http://localhost:63080";

function backendFetch(path: string, method = "GET", body?: unknown) {
  return fetch(`${backendUrl}/${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
}

async function readJson(response: Response): Promise<unknown> {
  if (!response.ok) {
    throw new Error(`${response.url} failed with HTTP ${response.status}`);
  }
  return response.json();
}

export async function fetchRecipes(
  args?: Promise<Record<string, string>>,
): Promise<PageResponseRecipeDto> {
  const { page, orderBy } = (await args) || {};

  const thePage =
    typeof page === "undefined"
      ? 0
      : typeof page === "string"
        ? parseInt(page)
        : page;

  const theOrderBy =
    orderBy === "time" || orderBy === "likes" ? orderBy : "createdAt";

  const response = await backendFetch(
    `api/recipes?page=${thePage}&size=${recipesPerPage}&sort=${theOrderBy}&slowdown=${slowDown_GetRecipeList}`,
  );

  return PageResponseRecipeDto.parse(await readJson(response));
}

export async function fetchRecipe(recipeId: string) {
  // Fehlt diese Zeile im Log, kam das Rezept aus dem Cache
  logRender("fetchRecipe", recipeId);

  const response = await backendFetch(
    `api/recipes/${recipeId}?slowdown=${slowDown_GetRecipe}`,
  );

  if (response.status === 404) {
    return null;
  }

  return GetRecipeQueryResponse.parse(await readJson(response));
}

export async function fetchFeedback(recipeId: string) {
  const response = await backendFetch(
    `api/recipes/${recipeId}/feedbacks?slowdown=${slowDown_GetFeedbacks}`,
  );

  return GetRecipeFeedbacksResponse.parse(await readJson(response));
}

export async function fetchExploreRecipes(recipeId: string) {
  const response = await backendFetch(
    `api/recipes/${recipeId}/explore?slowdown=${slowDown_GetExploreRecipes}`,
  );

  return GetExploreRecipesQueryResponse.parse(await readJson(response));
}

export async function saveFeedback(recipeId: string, newFeedback: NewFeedback) {
  const response = await backendFetch(
    `api/recipes/${recipeId}/feedbacks?slowdown=${slowDown_AddFeedback}`,
    "POST",
    { feedbackData: newFeedback },
  );

  if (response.status === 400) {
    const { errors } = (await response.json()) as {
      errors: Record<string, string>;
    };
    return { errors };
  }

  return AddFeedbackMutationResponse.parse(await readJson(response));
}

export async function saveLike(recipeId: string) {
  const response = await backendFetch(
    `api/recipes/${recipeId}/likes?slowdown=${slowDown_IncreaseLikes}`,
    "PATCH",
  );

  return IncrementLikesMutationResponse.parse(await readJson(response));
}

export async function postSubscribeToNewsletter(email: string) {
  const response = await backendFetch(
    `api/newsletter/subscribe?slowdown=${slowDown_SubscribeNewsletter}`,
    "POST",
    { email },
  );

  await readJson(response);
}
