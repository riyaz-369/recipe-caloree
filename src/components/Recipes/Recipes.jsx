import { useEffect, useState } from "react";
import Recipe from "./Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div>
            <div className="text-center mt-24">
                <h3 className="text-4xl font-bold mb-5">Our Recipes</h3>
                <p className="opacity-80">Fries With Leaves pairs crispy fries with vibrant greens, offering a delicious harmony of textures and flavors <br /> for a satisfying culinary experience. A refreshing dish made with a variety of fresh vegetables like lettuce, tomatoes, cucumbers, <br /> and carrots, often topped with dressing. Classic combo featuring a juicy burger served with a side <br /> of crispy, golden fries, offering a satisfying and indulgent meal option.</p>
            </div>

            <div className="grid grid-cols-3 mt-12">
                {
                    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                }
            </div>

        </div>
    );
};

export default Recipes;