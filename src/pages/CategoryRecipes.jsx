import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryRecipes.css';

const CategoryRecipes = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');

  const categoryEmojis = {
    breakfast: '🍳🥞',
    diet: '🥗🍏',
    vegetarian: '🥦🌿',
    'non-vegetarian': '🍗🥩',
    dessert: '🍰🍩',
    fastfood: '🍔🍟'
  };

  const categoryTitles = {
    breakfast: 'Breakfast Recipes',
    diet: 'Diet Recipes',
    vegetarian: 'Vegetarian Recipes',
    'non-vegetarian': 'Non-Vegetarian Recipes',
    dessert: 'Dessert Recipes',
    fastfood: 'Fast Food Recipes'
  };

  useEffect(() => {
    const loadRecipes = () => {
      const allRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
      const categoryRecipes = allRecipes.filter(recipe => recipe.category === category);
      setRecipes(categoryRecipes);
      setCategoryTitle(`${categoryTitles[category]} ${categoryEmojis[category]}`);
    };

    loadRecipes();
  }, [category]);

  return (
    <div className="category-page">
      <div className="category-container">
        <h1 className="category-title">{categoryTitle}</h1>
        <div className="recipes-grid">
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image">
                <img src={recipe.imageUrl} alt={recipe.name} />
              </div>
              <div className="recipe-content">
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
                <div className="recipe-details">
                  <span>⏱️ {recipe.cookingTime} mins</span>
                  <span>🥘 {recipe.ingredients.length} ingredients</span>
                </div>
                <div className="recipe-instructions">
                  <h4>Instructions:</h4>
                  <p>{recipe.instructions}</p>
                </div>
                <div className="recipe-ingredients">
                  <h4>Ingredients:</h4>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryRecipes; 