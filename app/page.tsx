import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function HomePage() {
  return (
    <main className="container">
      <header className="page-header">
        <h1>Explore Recipes</h1>
        <p>Simple, tested dishes ready for your kitchen.</p>
      </header>

      <section className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}
