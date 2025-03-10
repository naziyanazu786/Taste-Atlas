import React, { useEffect, useState } from 'react';
import './SavedRecipes.css';

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const loadSavedRecipes = () => {
      const saved = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
      setSavedRecipes(saved);
    };

    loadSavedRecipes();
  }, []);

  const handleRemove = (recipeId) => {
    const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
    localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
    setSavedRecipes(updatedRecipes);
  };

  return (
    <div className="saved-recipes-page">
      <div className="saved-recipes-container">
        <h1 className="page-title">Saved Recipes</h1>
        <div className="recipes-grid">
          {savedRecipes.map(recipe => (
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
                <button 
                  className="remove-btn"
                  onClick={() => handleRemove(recipe.id)}
                >
                  Remove from Saved
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedRecipes; 