import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFaceSadTear } from '@fortawesome/free-solid-svg-icons'

const AboutMeal = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
      setRecipe(data.meals)
    })
    .catch(err => setError(err.message))
  }, [id])

  return (
    <div className='page-container'>
     {error.length > 1 && <p className='error'>SORRY! Something Went Wrong: {error}</p>}

      {recipe && recipe.map(() => {
        return (
          <div className='about-meal-container'>
          <div className='flex-container'>
            <div className='about-meal-img'>
              <img src={recipe[0].strMealThumb} alt='Meal Picture' className='recipe-img'/>
            </div>
    
            <div className='meal-content'>
              <h3 className='meal-title'>
                <strong>Name: </strong>{recipe[0].strMeal}
              </h3>
    
              <h4 className='cuisine'>
                <strong>Cuisine: </strong>{recipe[0].strArea}
              </h4>
    
              <div className='ingredients'>
                <h4>Ingredients:</h4>
                <ul>
                  <li>
                    {recipe[0].strMeasure1} - {recipe[0].strIngredient1}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure2} - {recipe[0].strIngredient2}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure3} - {recipe[0].strIngredient3}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure4} - {recipe[0].strIngredient4}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure5} - {recipe[0].strIngredient5}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure6} - {recipe[0].strIngredient6}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure7} - {recipe[0].strIngredient7}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure8} - {recipe[0].strIngredient8}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure9} - {recipe[0].strIngredient9}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure10} - {recipe[0].strIngredient10}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure11} - {recipe[0].strIngredient11}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure12} - {recipe[0].strIngredient12}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure13} - {recipe[0].strIngredient13}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure14} - {recipe[0].strIngredient14}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure15} - {recipe[0].strIngredient15}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure16} - {recipe[0].strIngredient16}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure17} - {recipe[0].strIngredient17}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure18} - {recipe[0].strIngredient18}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure19} - {recipe[0].strIngredient19}
                  </li>
                  
                  <li>
                    {recipe[0].strMeasure20} - {recipe[0].strIngredient20}
                  </li>
                  
                </ul>
              </div>
            </div>

          </div>

          <div className='intstructions'>
            <h2>
              <strong>Instruction :</strong>
            </h2>
              <p>{recipe[0].strInstructions}</p>
          </div>

          <div className='video'>
            <h2>Video:</h2>
            {recipe[0].strYoutube === '' 
             ? 
            <p className='error'>
              Sorry! This recipe doesn't have a tutorial
              <FontAwesomeIcon icon={faFaceSadTear}/> 
            </p>
             : 
            <ReactPlayer 
              url={recipe[0].strYoutube}
              controls={true}
              className='tutorial'
              width='800px'
              height='450px'
            />
            }
          </div>
        </div>
        )
      })   
        
      }
    </div>
  )


}

export default AboutMeal;