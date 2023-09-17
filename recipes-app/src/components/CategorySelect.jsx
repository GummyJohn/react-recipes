import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom' 

const CategorySelect = () => {
  const { id } = useParams()
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();

  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    .then(res => res.json())
    .then(data => {
      setMeals(data.meals)
    })
    .catch( error => {
      setError(true)
    })
  }, [id])

  console.log(error)

  return (
    <>
      <h2 className='select'>Select a Meal!</h2>

      <div className='all-meals-container'>
        {error && <p className='error'>SORRY! Something Went Wrong</p>}

        {meals && meals.map((meal) => {
          return (
            <Link className='meal-container' key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
              <div className='meal-img'>
                <img src={meal.strMealThumb} alt='Meal Pictures'/>
              </div>
              <h3 className='meal-title'>{meal.strMeal}</h3>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default CategorySelect
