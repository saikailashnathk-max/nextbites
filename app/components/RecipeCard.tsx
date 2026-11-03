import { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <div className="recipe-meta">
        <span className="badge">{recipe.cuisine}</span>
        <span>
          {recipe.minutes} min · {recipe.difficulty}
        </span>
      </div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </article>
  );
}
