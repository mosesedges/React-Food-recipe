import React, { useState, useEffect } from 'react';
import Recipes from './Recipes';
import './App.css';

const App = () => {
	const APP_ID = 'a27199d3';

	const APP_KEY = '8c0c8cfd389b4c8578180555f784d17c';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQurey] = useState('chicken');

	useEffect(() => {
		getRecipe();
	}, []);

	const getRecipe = async () => {
		const res = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await res.json();

		console.log(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQurey(search);
		setSearch('');
	};

	return (
		<div className='container-App'>
			<header>
				<h1 className='logo'>Cook</h1>
				<h2 className='name'>Delicious Cook</h2>
			</header>
			<form onSubmit={getSearch} className='search-form'>
				<input
					className='search-bar'
					type='text'
					placeholder='Search recipe'
					value={search}
					onChange={updateSearch}
				/>
				<button className='search-button' type='submit'>
					Search
				</button>
			</form>

			{recipes.map((recipe) => (
				<Recipes
					key={recipe.recipe.label}
					title={recipe.recipe.label}
					calories={recipe.recipe.calories}
					image={recipe.recipe.image}
					ingredients={recipe.recipe.ingredients}
				/>
			))}
		</div>
	);
};

export default App;
