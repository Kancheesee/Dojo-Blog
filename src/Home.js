import {useState, useEffect} from 'react'; //called use state hook
import BlogList from './BlogList';
import useFetch from './usefetch';

const Home = () => {
    // const handleClick=() =>{
    //     console.log('hello everyone');

    // }
    // const handleClickAgain=(name)=>{
    //     console.log('hello'+ name);

    // const[name, setName]=useState('kanchi');
    // const[age, setAge]=useState(20);

    // const handleClick=() =>{
    //     setName('kumari');
    //     setAge(22);

    

    // const [name, setName]= useState('mario');

    // const handleDelete= (id) =>{
    //     const newBlogs=blogs.filter(blog=> blog.id !==id);
    //     setBlogs(newBlogs);
    // }

    const{data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
   
    
    
    return (
       <div className="home">
        {/* /* <h2>Homepage</h2>
        <p>{name} is {age} years old!</p>
        <button onClick={handleClick}>Click me</button>
        {/* <button onClick={()=>{
            handleClickAgain(' kanchi')
        }}>Click me Again</button> */}


        {/* {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>

            </div>
        ))} */}
        
        {/* developing props since we are using data in blog list but doesnt have it, it is in home.js*/}
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }


        {/* {blogs && <BlogList blogs={blogs.filter((blog) => blog.author==='mario')} title="Mario's Blogs!" />} */}
        {/* upper is a prop */}
        {/* <button onClick={()=> setName('luigi')}>change name</button>
        <p>{name}</p> */}


       </div> 
    );
}
 
export default Home;