import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux_rtk/storeRTK";
import { addIngredient, clear } from "../redux_rtk/sandwichSlice";

const Sandwich = () => {
  const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
  const dispatch = useDispatch();

  function handleAddBread() {
    dispatch(addIngredient('bread'))
  }

  function handleAddCheese() {
    dispatch(addIngredient('cheese'))
  }

  function handleAddSalami() {
    dispatch(addIngredient('salami'))
  }

  function handleDelete() {
    dispatch(clear())
  }
  
  return (
    <div className="sandwichContainer">
      <h1 className="counter">Choose your sandwich: </h1>
      <p className="counter">Sandwich: {ingredients}</p>
      <button className='buttonCounter' onClick={handleAddBread}>Add bread</button>
      <button className='buttonCounter' onClick={handleAddCheese}>Add cheese</button>
      <button className='buttonCounter' onClick={handleAddSalami}>Add salami</button>
      <button className='buttonSandwich' onClick={handleDelete}>Delete all ingredients</button>
    </div>
  );
};

export default Sandwich;
