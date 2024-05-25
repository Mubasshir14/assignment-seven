import { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';
import Header from './Header';

function App() {
  const [recipe, setRecipe] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, []);

  const addToCook = p => {
    const isExist = cart.find(recipe => recipe.recipe_id === p.recipe_id);
    if (!isExist) {
      setCart([...cart, p]);
    } else {
      alert('Already in cart');
    }
  };

  const handleDelete = recipe_id => {
    const itemToCook = cart.find(item => item.recipe_id === recipe_id);
    const newCart = cart.filter(item => item.recipe_id !== recipe_id);
    setCart(newCart);
    if (itemToCook) {
      setCurrentlyCooking([...currentlyCooking, itemToCook]);
    }
  };

  const totalCookingTime = cart.reduce((total, item) => total + item.preparing_time, 0);
  const totalCalories = cart.reduce((total, item) => total + item.calories, 0);

  const totalCookingTimeCurrentlyCooking = currentlyCooking.reduce((total, item) => total + item.preparing_time, 0);
  const totalCaloriesCurrentlyCooking = currentlyCooking.reduce((total, item) => total + item.calories, 0);

  return (
    <>
      <Header></Header>
      <div className='main-container'>
        {/* main recipe */}
        <div className='card-container'>
          {recipe.map(recipe => (
            <Recipe key={recipe.recipe_id} addToCook={addToCook} recipe={recipe}></Recipe>
          ))}
        </div>
        {/* main recipe end */}

        {/* result */}
        <div className='x'>
          {/* up result */}
          <div className='cart-container'>
            <h1 className='text-center pt-4 mb-4 text-2xl font-bold'>
              Want To Cook ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </h1>
            <hr />

            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <th className='text-left px-4 py-2'>No</th>
                  <th className='text-left px-4 py-2'>Name</th>
                  <th className='text-left px-4 py-2'>Time</th>
                  <th className='text-left px-4 py-2'>Calories</th>
                  <th className='text-left px-4 py-2'>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr key={item.recipe_id} className='border-t'>
                    <td className='px-4 py-2'>{idx + 1}</td>
                    <td className='text-sm px-4 py-2'>{item.recipe_name}</td>
                    <td className='text-sm px-4 py-2'>{item.preparing_time}</td>
                    <td className='text-sm px-4 py-2'>{item.calories}</td>
                    <td className='px-4 py-2'>
                      <button className='text-sm bg-green-600 p-2 rounded-md text-white' onClick={() => handleDelete(item.recipe_id)}>
                        Prepare
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
          </div>
          {/* down result */}
          <div className='cart-container'>
            <h1 className='text-center pt-4 mb-4 text-2xl font-bold'>Currently Cooking ({currentlyCooking.length} {currentlyCooking.length === 1 ? 'item' : 'items'})</h1>
            <hr />
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <th className='text-left px-4 py-2'>No</th>
                  <th className='text-left px-4 py-2'>Name</th>
                  <th className='text-left px-4 py-2'>Time</th>
                  <th className='text-left px-4 py-2'>Calories</th>
                </tr>
              </thead>
              <tbody>
                {currentlyCooking.map((item, idx) => (
                  <tr key={item.recipe_id} className='border-t'>
                    <td className='px-4 py-2'>{idx + 1}</td>
                    <td className='text-sm px-4 py-2'>{item.recipe_name}</td>
                    <td className='text-sm px-4 py-2'>{item.preparing_time}</td>
                    <td className='text-sm px-4 py-2'>{item.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
            <div className="totals-container flex justify-around mb-4">
              <div>Total Time = {totalCookingTimeCurrentlyCooking} minutes</div>
              <div>Total Calories = {totalCaloriesCurrentlyCooking} calories</div>
            </div>
          </div>
        </div>
        {/* result end */}
      </div>
    </>
  );
}

export default App;
