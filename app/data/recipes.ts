export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: "spicy-garlic-noodles",
    title: "Spicy Garlic Chili Noodles",
    cuisine: "Sichuan",
    minutes: 15,
    difficulty: "Easy",
    description: "Chewy wheat noodles tossed in sizzling garlic, scallions, soy sauce, and chili crisp.",
  },
  {
    id: "paneer-tikka-bowls",
    title: "Charred Paneer Tikka Bowls",
    cuisine: "Indian",
    minutes: 35,
    difficulty: "Medium",
    description: "Spiced yogurt-marinated paneer broiled until blistered, served over cumin rice.",
  },
  {
    id: "lemon-herb-salmon",
    title: "One-Pan Lemon Herb Salmon",
    cuisine: "Mediterranean",
    minutes: 25,
    difficulty: "Easy",
    description: "Crisp-skinned salmon fillets roasted alongside cherry tomatoes, olives, and oregano.",
  },
  {
    id: "mushroom-risotto",
    title: "Roasted Wild Mushroom Risotto",
    cuisine: "Italian",
    minutes: 45,
    difficulty: "Medium",
    description: "Creamy Arborio rice slowly simmered with porcini broth, thyme, and aged Parmesan.",
  },
];
