import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShowText from './ShowText';


const Categories = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => {
      setData(data.categories)
    })
    .catch(err => setError(err.message))
  }, [])
 
  
  return (
    <>
      <h2 className='select'>Select a Cateogry !</h2>
      <div className='category-container'>
      {error.length > 1 && <p className='error'>SORRY! Something Went Wrong: {error}</p>}

      {data && data.map((category) => {
        return (
          <div className='single-container'>
            <Link key={category.idCategory} to={`/category/${category.strCategory}`} className='single-container'>
              <div className='food-img'>
                <img src={category.strCategoryThumb}/>
              </div>
            </Link>
              <div className='category-content'>
                <h3 className='category-title'>{category.strCategory}</h3>
              <ShowText children={category.strCategoryDescription}/>
              </div>
          </div>
        )
        })
      }
      </div>
    </>
  )

}

export default Categories;