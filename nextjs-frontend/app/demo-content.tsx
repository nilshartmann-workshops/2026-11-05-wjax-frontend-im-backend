export function getDemoRecipes() {
  return {
    content: [
      {
        id: "40",
        createdAt: "2024-07-10T00:00:00",
        generatedAt: "2026-03-11T06:34:00",
        userFullname: "Nils",
        title: "French Onion Soup",
        headline:
          "Rich and flavorful onion soup topped with cheesy toast. Making everyday cooking fun! A delight to the taste buds.",
        preparationTime: 15,
        cookTime: 45,
        categories: [
          {
            id: "7",
            type: "Cuisine Type",
            title: "Mexican",
            description: "Features recipes originating from Mexico.",
            icon: "fa-solid fa-flag",
          },
          {
            id: "1",
            type: "Dietary",
            title: "Vegan",
            description:
              "Recipes suitable for vegans, with no animal products.",
            icon: "fa-solid fa-wheat-awn",
          },
          {
            id: "14",
            type: "Difficulty",
            title: "Medium",
            description:
              "Requires a bit more time and effort, could involve slightly complex procedures or more ingredients.",
            icon: "fa-solid fa-utensils",
          },
        ],
        mealType: "Lunch",
        likes: 0,
        image: {
          id: "1",
          src: "/images/recipes/food_40.png",
          title: "French Onion Soup",
        },
      },
      {
        id: "18",
        createdAt: "2024-06-20T00:00:00",
        generatedAt: "2026-03-11T06:34:00",
        userFullname: "Waldemar Vasu",
        title: "Stuffed Bell Peppers",
        headline:
          "Bell peppers filled with flavorful ground meat. Made with love and fresh ingredients. For the love of cooking and eating.",
        preparationTime: 15,
        cookTime: 45,
        categories: [
          {
            id: "1",
            type: "Dietary",
            title: "Vegan",
            description:
              "Recipes suitable for vegans, with no animal products.",
            icon: "fa-solid fa-wheat-awn",
          },
          {
            id: "2",
            type: "Dietary",
            title: "Vegetarian",
            description:
              "Vegetarian recipes that may include dairy and eggs, but no meat.",
            icon: "fa-solid fa-wheat-awn",
          },
          {
            id: "14",
            type: "Difficulty",
            title: "Medium",
            description:
              "Requires a bit more time and effort, could involve slightly complex procedures or more ingredients.",
            icon: "fa-solid fa-utensils",
          },
        ],
        mealType: "Lunch",
        likes: 54,
        image: {
          id: "19",
          src: "/images/recipes/food_18.png",
          title: "Stuffed Bell Peppers",
        },
      },
      {
        id: "38",
        createdAt: "2024-06-15T00:00:00",
        generatedAt: "2026-03-11T06:34:00",
        userFullname: "Lauren Jones",
        title: "Classic Caesar Salad",
        headline:
          "Crispy romaine lettuce with creamy Caesar dressing. Bon Appétit! Food that feels like home.",
        preparationTime: 10,
        cookTime: 0,
        categories: [
          {
            id: "6",
            type: "Cuisine Type",
            title: "Asian",
            description: "Traditional and inspired recipes from across Asia.",
            icon: "fa-solid fa-flag",
          },
          {
            id: "1",
            type: "Dietary",
            title: "Vegan",
            description:
              "Recipes suitable for vegans, with no animal products.",
            icon: "fa-solid fa-wheat-awn",
          },
          {
            id: "13",
            type: "Difficulty",
            title: "Easy",
            description:
              "Suitable for beginners, requires minimal ingredients and steps.",
            icon: "fa-solid fa-utensils",
          },
        ],
        mealType: "Breakfast",
        likes: 92,
        image: {
          id: "39",
          src: "/images/recipes/food_38.png",
          title: "Classic Caesar Salad",
        },
      },
    ],
    pageNumber: 0,
    totalPages: 14,
    hasNext: true,
    hasPrevious: false,
  };
}
