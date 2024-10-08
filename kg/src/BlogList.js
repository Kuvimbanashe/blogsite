import { Link } from 'react-router-dom';

const BlogList=({blogs,title})=>{
   
    return(
        <div>
        <h1 className="my-5">{title} </h1>
		   {blogs.map((blog)=>(
		   <Link to={`/blogdetails/${blog.id}`} className="text-decoration-none">
		       <div className="form-group form-control m-2" key={blog.id}>
		           
		           
		           
		           <h2 className="text-danger"> {blog.title}</h2>
		           <p> Written by {blog.author}</p>
		                 
		           
		           
		       </div></Link>
		       
		   ))}
		   
		   </div>
    );
}

export default BlogList;