import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css' // We'll create this file next
import '../styles/shared.css'

const Home = () => {
  const navigate = useNavigate()
  const [recipesByCategory, setRecipesByCategory] = useState({
    breakfast: [],
    diet: [],
    vegetarian: [],
    'non-vegetarian': [],
    dessert: [],
    fastfood: []
  });

  useEffect(() => {
    const loadRecipes = () => {
      const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
      
      // Group recipes by category
      const grouped = recipes.reduce((acc, recipe) => {
        const category = recipe.category || 'uncategorized';
        acc[category] = [...(acc[category] || []), recipe];
        return acc;
      }, {});

      setRecipesByCategory(grouped);
    };

    loadRecipes();
  }, []);

  const renderRecipeList = (recipes) => {
    if (!recipes || recipes.length === 0) return null;
    
    const handleSave = (recipe) => {
      const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
      const isAlreadySaved = savedRecipes.some(saved => saved.id === recipe.id);
      
      if (!isAlreadySaved) {
        localStorage.setItem('savedRecipes', JSON.stringify([...savedRecipes, recipe]));
        alert('Recipe saved successfully!');
      } else {
        alert('This recipe is already saved!');
      }
    };
    
    return (
      <div className="recipe-list">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <img src={recipe.imageUrl} alt={recipe.name} />
            <h4>{recipe.name}</h4>
            <p>{recipe.description}</p>
            <button 
              className="save-recipe-btn"
              onClick={(e) => {
                e.stopPropagation(); // Prevent category click when clicking save
                handleSave(recipe);
              }}
            >
              Save Recipe
            </button>
          </div>
        ))}
      </div>
    );
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="page-background">
      <div className="content-wrapper">
        <div className="home-container">
          {/* <div className="banner-container">
            <img src="/ban.jpg" className="img-fluid w-100 banner-image" alt="banner" />
          </div> */}
          
          <div className="container py-4">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card recipe-card" onClick={() => handleCategoryClick('breakfast')}>
                  <div className="card-img-wrapper">
                    <img src="/f5.jpg" className="card-img-top" alt="breakfast" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Breakfast Recipes 🍳🥞</h5>
                    <p className="card-text">Morning bites that energize your soul!</p>
                    {renderRecipeList(recipesByCategory.breakfast)}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card recipe-card" onClick={() => handleCategoryClick('diet')}>
                  <div className="card-img-wrapper">
                    <img src="/f6.jpg" className="card-img-top" alt="diet" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Diet Recipes 🥗🍏</h5>
                    <p className="card-text">Guilt-free flavors for a healthier you!</p>
                    {renderRecipeList(recipesByCategory.diet)}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card recipe-card" onClick={() => handleCategoryClick('vegetarian')}>
                  <div className="card-img-wrapper">
                    <img src="/f3.jpg" className="card-img-top" alt="vegetarian" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Vegetarian Recipes 🥦🌿</h5>
                    <p className="card-text">Colorful, healthy, and simply irresistible!</p>
                    {renderRecipeList(recipesByCategory.vegetarian)}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card recipe-card" onClick={() => handleCategoryClick('non-vegetarian')}>
                  <div className="card-img-wrapper">
                    <img src="/f4.jpg" className="card-img-top" alt="non-vegetarian" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Non-Vegetarian Recipes 🍗🥩</h5>
                    <p className="card-text">Meat lovers, your feast starts here!</p>
                    {renderRecipeList(recipesByCategory['non-vegetarian'])}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card recipe-card" onClick={() => handleCategoryClick('dessert')}>
                  <div className="card-img-wrapper">
                    <img src="/f2.jpg" className="card-img-top" alt="dessert" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Dessert Recipes 🍰🍩</h5>
                    <p className="card-text">Because life is too short to skip dessert!</p>
                    {renderRecipeList(recipesByCategory.dessert)}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card recipe-card" onClick={() => handleCategoryClick('fastfood')}>
                  <div className="card-img-wrapper">
                    <img src="/f7.jpg" className="card-img-top" alt="fast food" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Fast Food Recipes 🍔🍟</h5>
                    <p className="card-text">Street food flavors, straight from your kitchen!</p>
                    {renderRecipeList(recipesByCategory.fastfood)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home