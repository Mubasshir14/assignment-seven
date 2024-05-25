import { IoIosTimer } from "react-icons/io";
import { GoFlame } from "react-icons/go";

const Recipe = ({ recipe, addToCook }) => {
    return (
        <div className="">
            <div className='card spcce-y-4 mb-6 rounded-xl'>
                <img className='rounded-lg mb-4' src={recipe.recipe_image} alt="" />
                <h3 className='flex mb-4 justify-start font-bold text-[#282828]'>{recipe.recipe_name}</h3>
                <p className='flex mb-4 justify-start text-left text-[#878787]'>{recipe.short_description}</p>
                <hr />
                <br />
                <h3 className='flex mb-4 justify-start font-bold text-[#282828]'>Ingredients: {recipe.ingredients.length}</h3>
                {recipe.ingredients.map((ingredient) => (
            <li className='flex  justify-start text-left list-item text-[#878787]' key={ingredient}>{ingredient}</li>
          ))} <br />
          <hr />
        <div className='flex mt-4  mb-4 gap-6 text-[#878787]'>
          <div className='flex  items-center gap-2'>
           <IoIosTimer></IoIosTimer>
            <p>{recipe.preparing_time} minutes</p>
          </div>
          <div className='flex  items-center gap-2'>
            <GoFlame></GoFlame>
            <p>{recipe.calories} calories</p>
          </div>
        </div>
        <hr />
        <button onClick={()=>addToCook(recipe)} className='flex mt-4 justify-start p-4 rounded-xl text-white font-bold bg-[#068f56]'>Add To Cook</button>
            </div>
        </div>
    );
};

export default Recipe;