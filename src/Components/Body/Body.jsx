import React, { useState } from 'react'

function Body() {

  let [ingredients,setIngredients] = useState([])


  let [values,setValues] = useState({
    ingredients:""

  })

// __FUNCTIONS __
  function inputChange(event){
    
    setValues( prev => (
      {
       
        [event.target.name]:event.target.value
      }
    ))
    
  }


function addFunction (){
  let IngredientsArray = values.ingredients.split(" ")
  setIngredients(IngredientsArray)

}


console.log(ingredients)




  // -----VIEW-------
  return (
    <section className="body">
      <div className="body__form">
        <input placeholder='e.g. oregano'
          type="text"
          aria-label='add ingredients'
          className="body__input"
          name='ingredients'
          value={values.ingredients}
          onChange={(event)=>inputChange(event)}
          
          />
        <button 
        onClick={addFunction}
        className="body__button">
          + Add Ingredients
        </button>
      </div>
      <ul>
        {
          ingredients?ingredients.map((item,index)=> <li key={index}>{item}</li>):<li>No Ingredients Added</li>
        }
      </ul>
    </section>
  )
}

export default Body