import {useState} from 'react';
import BlogList from './BlogList';


const Home = () => {

  const [blogs, setBlogs] = useState([
    {title:'Ricardo', body:'Ing...', author:'Otalora', id:1 },
    {title:'Fernando', body:'Doct...', author:'Eslava', id:2 },
    {title:'Andres', body:'Tecnico...', author:'Luna', id:3 },
  ]);
  
  return (
      <div className="home">
        <BlogList blogs = {blogs} title="Chevere"/> 
      </div>
  );
}

export default Home
