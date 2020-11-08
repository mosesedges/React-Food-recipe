import React from 'react';
import style from './recipe.module.css';

const Recipes = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.props}>
			<h1 className={style.title}>
				{title.length < 20 ? `${title}` : `${title.substring(0, 20)}...`}
			</h1>
			<img className={style.image} src={image} alt='' />
			<p className={style.calories}> Calories : {calories.toFixed(1)}</p>
			<p>Ingredients</p>
			<ol>
				{ingredients.map((ingredient) => (
					<li className={style.ingredient}> {ingredient.text}</li>
				))}
			</ol>
		</div>
	);
};

export default Recipes;
