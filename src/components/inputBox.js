import React from 'react';

const InputBox = ({inputValue, changed, searchClicked, onKeyPress}) => {
	return(
		<div>
			<input className='ma2'
				onChange={changed} 
				onKeyPress={onKeyPress}
				// value = {inputValue}
				type='text' /> 
	        <button 
		        type="button" 
		        className="btn btn-dark"
		        onClick={searchClicked}
		        >search</button>
        </div>
		)

}

export default InputBox;