import { useState,useEffect } from "react";

const useFetch=(url)=>{
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState(null);
  const [error,setError]=useState(null);
    useEffect(() => {
        
        setTimeout(() => {
          fetch(url) 
            .then((response) => {
              if(!response.ok)
              {
              throw  Error('Failed to Fetch data due to any resource')
              }
              return response.json();
            })
            .then((data) => {
              setBlogs(data);
              setIsLoading(false);
              setError(null)
              
            }).catch((error)=>{
              setIsLoading(false);
              setError(error.message);
            });
        }, 1000);
      }, []);
      return {isLoading,blogs,error};
}

export default useFetch;