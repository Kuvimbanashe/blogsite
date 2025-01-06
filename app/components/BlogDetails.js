import { useParams, useHistory } from 'react-router-dom';
import usefetch from './usefetch';


const BlogDetails = () =>{

const { id } = useParams();
let path = "http://localhost:8000/blogs/";
path= path + id;
const { data:blog, error, isPending } = usefetch(path)
const history = useHistory();
const HandleDelete =(e)=>{
    fetch(path,{
        method:'DELETE'   
         })
        .then(()=>{
            history.push('/');  
        })
    
    }

    return(
        
        <div>
            
            {isPending  && <div> Loading...</div>}
            { error && <div> {error} </div>}
            
            { blog && (
               <article>
                   
                   <h2> {blog.title} </h2>
                   <p>Written by {blog.author}</p>
                   <div>
                       {blog.body}
                   </div>
                   <div>
                       <button onClick={HandleDelete}>Delete Blog</button>
                   </div>
                   
                   
               </article> 
            )}
            
            
        </div>
    );
}

export default BlogDetails;