import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const AboutMeal = () => {
  const { id } = useParams();
  console.log(id)

  const [recipe, setRecipe] = useState([])
  const [error, setError] = useState(true)

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
      setRecipe(data.meals)
      setError(false)
    })
    .catch(err => {
      setError(err.message)
    })

  }, [id])

  console.log(recipe)

  return (
    <div>AboutMeal</div>
  )
}

export default AboutMeal