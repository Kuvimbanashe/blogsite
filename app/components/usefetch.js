import {useState, useEffect} from 'react';

const UseFetch = (url)=>{

const [data,setData]= useState(null);
const [isPending,setPending]=useState(true);
const [error, setError] = useState("");


useEffect(()=>{

const abortCont = new AbortController();

setTimeout(()=>{
    fetch(url,{signal:abortCont.signal})
.then(res =>{
    if(!res.ok){
      throw Error("There was an error when trying to fetch data at url : " + url);
    }
    return res.json();
})
.then(data=>{
   setData(data);
   setPending(false);
   
})
.catch(err =>{

    if(err.name === 'AbortError')
    {
        
    }
    else{
        setPending(false);
       setError(err.message);
    }
   
   })
},1000);

return () => abortCont.abort();
    
},[url]);

return {data,error, isPending};
}

export default UseFetch