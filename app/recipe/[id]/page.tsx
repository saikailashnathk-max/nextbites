import Link from "next/link";
import { getRecipe } from "../../data/recipes";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    return (
      <main className="container">
        <div className="empty-state">
          <h1>Recipe not found</h1>
          <p>We couldn&apos;t find a recipe with ID &ldquo;{id}&rdquo;.</p>
          <p style={{ marginTop: "1rem" }}>
            <Link href="/" className="back-link">
              ← Back to all recipes
            </Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">
        ← Back to all recipes
      </Link>

      <article className="recipe-detail">
        <header className="detail-header">
          <div className="recipe-meta">
            <span className="badge">{recipe.cuisine}</span>
            <span>
              {recipe.minutes} min · {recipe.difficulty}
            </span>
          </div>
          <h1>{recipe.title}</h1>
          <p className="detail-description">{recipe.description}</p>
        </header>

        <div className="detail-sections">
          <section className="detail-box">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-box">
            <h2>Steps</h2>
            <ol className="steps-list">
              {recipe.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </main>
  );
}
