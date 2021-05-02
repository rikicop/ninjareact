import {useState, useEffect} from 'react';
import BlogList from './BlogList';


const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error,setError] = useState(null);
 /*  const handleDelete = (id) => {
    const newBlogs = blogs.filter( blog => blog.id !== id)
    setBlogs(newBlogs)
  } */
  
  useEffect(()=>{
   setTimeout(()=>
   fetch('http://localhost:8000/blogs')
    .then(res => {
     
      if(!res.ok){
        throw Error('No se cargaron datos')
      }
      return res.json();
    }) 
    .then(data => {
      setBlogs(data);
      setIsPending(false);
      setError(null)
    })
    .catch(err =>{
      setIsPending(false)
      setError(err.message)
    })
   ,1000)
  },[]);

  return (
      <div className="home">
        {error && <div style={{color:'red'}}> {error} </div>}
        {isPending && <div> Cargando... </div> }
        { blogs && <BlogList blogs = {blogs} title="Todos Los Blogs"  /> } 
      </div>
  );
}

export default Home
