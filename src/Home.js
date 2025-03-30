import {useState} from 'react'; //called use state hook
import BlogList from './BlogList';

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

    const[blogs, setBlogs]=useState([
        {title: 'My new website', body: 'lorem ipsum...', author:'mario', id:1},
        {title: 'Welcome Party!', body: 'lorem ipsum...', author:'yoshi', id:2}, //id must be unique
        {title: 'Web dev top tips', body: 'lorem ipsum...', author:'mario', id:3}
    ]);
   
    
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
        <BlogList blogs={blogs} title="All Blogs!" /> 
        {/* upper is a prop */}
       </div> 
    );
}
 
export default Home;