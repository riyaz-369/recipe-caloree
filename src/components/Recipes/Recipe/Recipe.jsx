import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleWantToCookBtn }) => {
    const { recipe_name, description, recipe_image, preparing_time, calories, ingredients } = recipe;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl border-2">
                <figure className="p-4">
                    <img src={recipe_image} alt="Shoes" className="rounded-2xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{recipe_name}</h2>
                    <p className="opacity-80">{description}</p> <br />
                    <hr />
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Ingredients: {ingredients.length} </h4>
                        <ul className="list-disc">
                            <div className="ml-7 mb-4 opacity-80">
                                {
                                    ingredients.map((ingredient, idx) => <li key={idx}> {ingredient} </li>)
                                }
                            </div>
                        </ul>
                        <hr />
                        <div className="flex gap-12 mt-4">
                            <div className='flex items-center gap-1'>
                                <IoTimeOutline />
                                <span className='text-sm'> {preparing_time}</span>
                            </div>
                            <div className='flex items-center gap-1'>
                                <AiOutlineFire />
                                <span className='text-sm'> {calories}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions mt-4">
                        <button onClick={() => handleWantToCookBtn(recipe)} className="btn rounded-full text-lg bg-green-400">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleWantToCookBtn: PropTypes.func,
}

export default Recipe;