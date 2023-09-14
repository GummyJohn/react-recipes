import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom' 
import fetchData from '../api'
// const {data, error} = fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?${id}}`)

// console.log(fetchData('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'))

const CategorySelect = () => {
  const { id } = useParams()

  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(true);

  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    .then(res => res.json())
    .then(data => {
      setMeals(data.meals)
      setError(false)
    })
    .catch(err => {
      setError(err.message)
    })
  }, [id])

  return (
    <>
      <div className='all-meals-container'>
        {error && <p className='error'>SORRY! Something Went Wrong: {error}</p>}
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