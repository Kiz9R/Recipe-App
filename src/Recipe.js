import React from 'react'
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <strong>Calories: {calories.toFixed(2)}</strong>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;
