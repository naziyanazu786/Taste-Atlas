import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateRecipe.css';

const CreateRecipe = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    ingredients: [],
    instructions: '',
    imageUrl: '',
    cookingTime: 0,
    category: ''
  });
  const [newIngredient, setNewIngredient] = useState('');

  const categories = [
    { value: 'breakfast', label: 'Breakfast Recipes 🍳🥞' },
    { value: 'diet', label: 'Diet Recipes 🥗🍏' },
    { value: 'vegetarian', label: 'Vegetarian Recipes 🥦🌿' },
    { value: 'non-vegetarian', label: 'Non-Vegetarian Recipes 🍗🥩' },
    { value: 'dessert', label: 'Dessert Recipes 🍰🍩' },
    { value: 'fastfood', label: 'Fast Food Recipes 🍔🍟' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      setRecipe(prev => ({
        ...prev,
        ingredients: [...prev.ingredients, newIngredient.trim()]
      }));
      setNewIngredient('');
    }
  };

  const handleRemoveIngredient = (index) => {
    setRecipe(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.category) {
      alert('Please select a recipe category');
      return;
    }

    const existingRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const newRecipe = {
      ...recipe,
      id: Date.now(),
      date: new Date().toISOString()
    };
    
    const recipesByCategory = existingRecipes.reduce((acc, recipe) => {
      const category = recipe.category || 'uncategorized';
      acc[category] = [...(acc[category] || []), recipe];
      return acc;
    }, {});

    recipesByCategory[newRecipe.category] = [
      ...(recipesByCategory[newRecipe.category] || []),
      newRecipe
    ];

    const updatedRecipes = Object.values(recipesByCategory).flat();
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
    navigate('/home');
  };

  const handleSave = () => {
    if (!recipe.category) {
      alert('Please select a recipe category');
      return;
    }

    const savedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipeToSave = {
      ...recipe,
      id: Date.now(),
      date: new Date().toISOString()
    };
    
    // Group recipes by category
    const recipesByCategory = savedRecipes.reduce((acc, recipe) => {
      const category = recipe.category || 'uncategorized';
      acc[category] = [...(acc[category] || []), recipe];
      return acc;
    }, {});

    // Add new recipe to its category
    recipesByCategory[recipeToSave.category] = [
      ...(recipesByCategory[recipeToSave.category] || []),
      recipeToSave
    ];

    // Save all recipes back to localStorage
    const updatedRecipes = Object.values(recipesByCategory).flat();
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

    // Show success message with OK button
    const confirmed = window.confirm('Recipe saved successfully! Click OK to view your recipes.');
    
    if (confirmed) {
      // Reset form
      setRecipe({
        name: '',
        description: '',
        ingredients: [],
        instructions: '',
        imageUrl: '',
        cookingTime: 0,
        category: ''
      });
      setNewIngredient('');
      
      // Navigate to home page
      navigate('/home');
    }
  };

  return (
    <div className="create-recipe-container">
      <div className="recipe-form-card">
        <h2>Create Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Recipe Category</label>
            <select
              name="category"
              value={recipe.category}
              onChange={handleInputChange}
              required
              className="form-select"
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={recipe.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={recipe.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Ingredients</label>
            <div className="ingredients-input">
              <input
                type="text"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                placeholder="Enter an ingredient"
              />
              <button type="button" onClick={handleAddIngredient} className="add-ingredient-btn">
                Add Ingredient
              </button>
            </div>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient}
                  <button 
                    type="button" 
                    onClick={() => handleRemoveIngredient(index)}
                    className="remove-ingredient-btn"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="form-group">
            <label>Instructions</label>
            <textarea
              name="instructions"
              value={recipe.instructions}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={recipe.imageUrl}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Cooking Time (minutes)</label>
            <input
              type="number"
              name="cookingTime"
              value={recipe.cookingTime}
              onChange={handleInputChange}
              min="0"
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="create-btn">Create Recipe</button>
            <button type="button" onClick={handleSave} className="save-btn">Save Recipe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe; 