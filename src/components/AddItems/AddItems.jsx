import React, { useRef, useState } from "react";
import Button from "../Button";
import DisplayItems from "../DisplayItems/DisplayItems";

const AddItems = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const inputRef = useRef(null);
  const handleAddIngredient = () => {
    const newIngredient = inputRef.current.value;
    if (!newIngredient) return;
    setIngredientList((prevList) => {
      const updatedIngredientList = [...prevList, newIngredient];
      console.log(updatedIngredientList);
      return updatedIngredientList;
    });
  };
  return (
    <>
      <h2>AddItems</h2>
      <input
        ref={inputRef}
        type="text"
        name="ingredient-input"
        id="ingredient-input"
        placeholder="Type the ingredient name here"
      />
      <Button name={"Add Ingredient"} handleClick={handleAddIngredient} />
      <DisplayItems srcList={ingredientList} />
    </>
  );
};

export default AddItems;
