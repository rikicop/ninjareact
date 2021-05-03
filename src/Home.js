import BlogList from './BlogList';
import useFetch from './useFetch'


const Home = () => {
  const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
   
  return (
      <div className="home">
        {error && <div style={{color:'red'}}> {error} </div>}
        {isPending && <div> Cargando... </div> }
        { blogs && <BlogList blogs = {blogs} title="Todos Los Blogs"  /> } 
      </div>
  );
}

export default Home
