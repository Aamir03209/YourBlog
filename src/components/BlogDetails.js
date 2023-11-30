import React from 'react'
import {useParams,useHistory} from 'react-router-dom'
import useFetch from './useFetch';


const BlogDetails = () => {
    const {id} = useParams();
    const history=useHistory();
    const {isLoading,blogs,error} = useFetch('http://localhost:3001/blogs/' +id)

    const handleDelete=()=>{
      fetch('http://localhost:3001/blogs/'+id,{
        method:'DELETE'
      }).then(()=>{
       history.push('/')
      })
    }
      return (
    <div className='blog-details'>
     {isLoading && <div> Loading...</div>}
     {error && <div>{error}</div>}
     {blogs && 
        <article>
            <h1>{blogs.title}</h1>
            <h5>Written by {blogs.author}</h5>
            <p>{blogs.body}</p>
            <button onClick={handleDelete}>Delete Blog</button>
        </article>
     }

    </div>
  )
}

export default BlogDetails
