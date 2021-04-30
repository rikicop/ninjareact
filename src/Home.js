import {useState} from 'react';
import BlogList from './BlogList';


const Home = () => {

  const [blogs, setBlogs] = useState([
    {title:'Ricardo', body:'Ing...', author:'Luna', id:1 },
    {title:'Fernando', body:'Doct...', author:'Eslava', id:2 },
    {title:'Andres', body:'Tecnico...', author:'Luna', id:3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter( blog => blog.id !== id)
    setBlogs(newBlogs)
  }
  
  return (
      <div className="home">
        <BlogList blogs = {blogs} title="Todos Los Blogs" handleDelete={handleDelete} /> 
        {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'Luna')} title="Solo Luna"/>  */}
      </div>
  );
}

export default Home
