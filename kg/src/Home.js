import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import usefetch from './usefetch';

const Home = () => {

const {data:Blogs, error, isPending} =usefetch('http://localhost:8000/blogs')



    return(
    
		<div className="home">
		    <h2>My App</h2>
		    {isPending && <div className="my-5"><b>Loading...</b></div>}
		    {error && <div> {error} </div>}
		  {Blogs && <BlogList blogs={Blogs} title="All Blogs" />}

		   
		</div>
		
	
	);
}

export default Home;