import { useEffect, useState } from "react";
import Recipe from "./Recipe/Recipe";
import Cooklist from "../CookList/Cooklist";
import PropTypes from 'prop-types';

const Recipes = ({ handleWantToCookBtn, wantToCook }) => {
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

            <div className="mt-12 flex gap-6">
                <div className="grid grid-cols-2 gap-6">
                    {
                        recipes.map(recipe => <Recipe key={recipe.recipe_id} handleWantToCookBtn={handleWantToCookBtn} recipe={recipe}></Recipe>)
                    }
                </div>
                <div>
                    <Cooklist wantToCook={wantToCook}></Cooklist>
                </div>
            </div>

        </div>
    );
};

Recipes.propTypes = {
    handleWantToCookBtn: PropTypes.func.isRequired,
    wantToCook: PropTypes.array
}

export default Recipes;