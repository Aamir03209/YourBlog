import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history=useHistory();
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  const [author,setAuthor]=useState('');
  const [isLoading,setIsLoading]=useState(false);
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    const obj={title,body,author}; 
    setIsLoading(true) 
     
    fetch('http://localhost:3001/blogs',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(obj)
    }).then(()=>{
      console.log('Blog added');
      setIsLoading(false)
      history.push('/')
    })
   
  }
  

  return (
    <div className='create'>
      <h1>Create a new Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        
        <label>Blog Body:</label>
        <textarea  required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

        <label>Blog Author:</label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
          <option >Aamir</option>
          <option >Bazil</option>

        </select>
       {!isLoading&&<button>Add Blog</button>}
       {isLoading&& <button disabled>Adding Blog....</button>}

      </form>
    </div>
  )
}

export default Create
