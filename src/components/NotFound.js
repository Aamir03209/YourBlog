import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>Error Code: 404</h1>
      <p>Your Page Does not exist</p>
      <Link to='/'>Go Back To Home Page</Link>
    </div>
  )
}

export default NotFound
