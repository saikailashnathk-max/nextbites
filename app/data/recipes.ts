export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "spicy-garlic-noodles",
    title: "Spicy Garlic Chili Noodles",
    cuisine: "Sichuan",
    minutes: 15,
    difficulty: "Easy",
    description: "Chewy wheat noodles tossed in sizzling garlic, scallions, soy sauce, and chili crisp.",
    ingredients: [
      "200g fresh wheat noodles",
      "4 cloves garlic, finely minced",
      "2 scallions, thinly sliced",
      "2 tbsp light soy sauce",
      "1 tbsp black rice vinegar",
      "1.5 tbsp chili crisp",
      "2 tbsp neutral high-smoke-point oil",
    ],
    steps: [
      "Boil the wheat noodles in salted water according to package directions until just al dente, then drain well.",
      "Combine soy sauce, black vinegar, and chili crisp in a heatproof mixing bowl, then pile the minced garlic and scallion whites on top.",
      "Heat the neutral oil in a small pan until shimmering, then pour it directly over the garlic and scallions to sizzle.",
      "Add the drained hot noodles to the bowl, toss thoroughly to coat every strand, and garnish with scallion greens.",
    ],
  },
  {
    id: "paneer-tikka-bowls",
    title: "Charred Paneer Tikka Bowls",
    cuisine: "Indian",
    minutes: 35,
    difficulty: "Medium",
    description: "Spiced yogurt-marinated paneer broiled until blistered, served over cumin rice.",
    ingredients: [
      "250g firm paneer, cut into 1-inch cubes",
      "1 bell pepper and 1 red onion, cut into chunks",
      "1/2 cup thick Greek yogurt",
      "1 tbsp ginger-garlic paste",
      "1.5 tsp Kashmiri red chili powder",
      "1 tsp garam masala and 1/2 tsp turmeric",
      "2 cups cooked jeera (cumin) rice",
    ],
    steps: [
      "Whisk yogurt, ginger-garlic paste, chili powder, garam masala, turmeric, and salt in a large bowl.",
      "Gently fold in the paneer cubes, bell pepper, and red onion until evenly coated; marinate for 15 minutes.",
      "Arrange the marinated paneer and vegetables on a foil-lined baking sheet and broil on high for 8 to 10 minutes until charred at the edges.",
      "Divide warm cumin rice across bowls, top with the blistered paneer tikka, and finish with fresh lemon juice.",
    ],
  },
  {
    id: "lemon-herb-salmon",
    title: "One-Pan Lemon Herb Salmon",
    cuisine: "Mediterranean",
    minutes: 25,
    difficulty: "Easy",
    description: "Crisp-skinned salmon fillets roasted alongside cherry tomatoes, olives, and oregano.",
    ingredients: [
      "2 skin-on salmon fillets (170g each)",
      "1.5 cups cherry tomatoes",
      "1/3 cup pitted Kalamata olives",
      "2 tbsp extra-virgin olive oil",
      "1 lemon (half sliced, half juiced)",
      "1 tsp dried oregano",
      "Salt and cracked black pepper to taste",
    ],
    steps: [
      "Preheat the oven to 200°C (400°F) and toss cherry tomatoes and olives on a sheet pan with half the olive oil and oregano.",
      "Nestle the salmon fillets skin-side down onto the pan, drizzle with remaining olive oil, and season with salt and pepper.",
      "Top the fillets with thin lemon slices and roast for 12 to 15 minutes until the salmon flakes easily with a fork.",
      "Squeeze fresh lemon juice over the pan right out of the oven and serve warm with the burst tomatoes.",
    ],
  },
  {
    id: "mushroom-risotto",
    title: "Roasted Wild Mushroom Risotto",
    cuisine: "Italian",
    minutes: 45,
    difficulty: "Medium",
    description: "Creamy Arborio rice slowly simmered with porcini broth, thyme, and aged Parmesan.",
    ingredients: [
      "1.5 cups Arborio rice",
      "300g mixed mushrooms (cremini and oyster), sliced",
      "4 cups warm vegetable or mushroom stock",
      "1 shallot, finely diced",
      "2 cloves garlic, minced",
      "1/2 cup freshly grated Parmesan cheese",
      "2 tbsp unsalted butter and 1 tbsp olive oil",
    ],
    steps: [
      "Sauté the sliced mushrooms in olive oil over medium-high heat until golden brown, season with salt and thyme, and set aside.",
      "In the same pot, melt half the butter, cook the diced shallot and garlic until translucent, and toast the Arborio rice for 2 minutes.",
      "Add warm stock one ladle at a time, stirring frequently and waiting until each ladle is mostly absorbed before adding the next (about 20 minutes).",
      "Remove from heat once the rice is tender and creamy, then stir in the remaining butter, Parmesan, and roasted mushrooms.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}
