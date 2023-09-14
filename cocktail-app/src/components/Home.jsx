import React, { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react';
import fetchData from '../api'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => {
      setData(data.categories)
      setError(false);
    })
    .catch(err => setError(err.message))
  }, [])



  return (
    <div className='category-container'>
    {error && <p className='error'>SORRY! Something Went Wrong: {error}</p>}

    {data && data.map((category) => {
      return (
        <Link key={category.idCategory} to={`/category/${category.strCategory}`} className='single-container'>
          <div className='food-img'>
            <img src={category.strCategoryThumb}/>
          </div>
          <h3 className='category-title'>{category.strCategory}</h3>
          <p className='category-about'>{category.strCategoryDescription}</p>
        </Link>
      )
      })
    }
    </div>
  )

}

export default Home