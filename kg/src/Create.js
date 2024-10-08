import {useState} from "react";
import {useHistory} from 'react-router-dom';


const Create =()=>{

const [title, setTitle] = useState('');
const [ body, setBody] = useState('');
const [author, setAuthor] = useState('cama');
const [isPending, setPending] = useState(false);
const  history = useHistory();


const HandleClick = (e) =>{
    e.preventDefault();
    const blog ={title, body,author};
    setPending(true);
    fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers : {"Content-Type":"application/json"},
        body : JSON.stringify(blog)        
        
        
            })
            .then(() =>{
            setPending(false);              
             //alert('record saved')
             history.push('/');
            })
    
    }
    return(
        
        <div>
            <h2> Create Blog </h2>
            
            <form onSubmit={HandleClick}>
                
               <div>
                   <div> 
                  <label>Blog Title: <input
                  type ="text"
                  required
                  value={title}
                  onChange = {(e) => setTitle(e.target.value)}
                  
                  /></label> 
                   </div>
                   
                   <div> 
                  <label>Blog Body:</label> <br/>   
                   <textarea
                  
                  required
                  value={body}
                  onChange = {(e) => setBody(e.target.value)}
                  
                  />
                  
                    </div>
                    
                    <div> 
                        <label>Blog Author :
                  <select 
                  value={author}
                      
                  onChange = {(e) => setAuthor(e.target.value)}>
                      
                      <option
                       value="cama"
                      >cama</option >
                      <option value="melania">melania</ option>
                  </select>
                  </label>
                   </div>
                 
                   
               </div> 
               <div> 
                   {!isPending && <button type="submit">Save Blog</button> }
                   {isPending && <p>Saving record</p>}
               </div>
               
                
            </form>
           
            
        </div>
    );
}

export default Create;