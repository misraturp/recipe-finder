import React from 'react';
import RecipeBox from './recipeBox'

const RecipeList = ({recipes}) => {
	return(
		<div>
			{
				recipes.map((item, index) => {
					return(
						// <p key={item.key}>{item.title}</p>
						<RecipeBox key={item.id} name={item.title} />
					);
				}
			)}
        </div>
		);

}

export default RecipeList;