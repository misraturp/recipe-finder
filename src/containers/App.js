import React from 'react';
import './App.css';
import InputBox from '../components/inputBox'
import RecipeList from '../components/RecipeList'

class App extends React.Component {
	  constructor(){
	    super()
	    this.state = {
	      inputfield: '',
	      listOfRecipes: []
	    }
	  }

	searchClicked = () => {
		let ingredient = this.state.inputfield;

		fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredient + ',+flour,+sugar&apiKey=789031a137c64d8c99ed7d24a72ba08c')
		  .then(response => response.json())
		  .then(data => this.setState({listOfRecipes: data}))

		// console.log(this.state.listOfRecipes);

		// async fetchData = (ingredient) => {
		//   // const response = await fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredient + '&apiKey=789031a137c64d8c99ed7d24a72ba08c');
		//   const response = await fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredient + ',+flour,+sugar&apiKey=789031a137c64d8c99ed7d24a72ba08c');
		//   const data = await response.json();
		//   console.log(data);
		// }

		// fetchData(ingredient);
	  }

	keyPressed = (event) => {
	    if(event.key === 'Enter'){
	      this.searchClicked();
	    }
	  }


	render(){
	  return (
	    <div className="App">
	      <header>
	        Welcome to the recipe finder!
	      </header>
	      <InputBox inputValue={this.state.inputfield} searchClicked = {this.searchClicked} onKeyPress={this.keyPressed}/>
	      {console.log(this.state.listOfRecipes)}
	      <RecipeList recipes = {this.state.listOfRecipes}/>
	    </div>
	  );
	}
}

export default App;
