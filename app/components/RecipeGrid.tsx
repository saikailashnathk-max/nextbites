"use client";

import { useState } from "react";
import { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.cuisine.toLowerCase().includes(normalizedQuery)
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by recipe title or cuisine (e.g. Indian, noodles)..."
          aria-label="Search recipes by title or cuisine"
          className="search-input"
        />
      </div>

      {filteredRecipes.length === 0 ? (
        <div className="empty-state">
          <p>No recipes match &ldquo;{query}&rdquo;. Try another title or cuisine!</p>
        </div>
      ) : (
        <section className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      )}
    </div>
  );
}
