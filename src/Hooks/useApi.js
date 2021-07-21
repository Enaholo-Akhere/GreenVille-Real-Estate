import {useEffect, useState} from 'react';


const useApi = (url) => {
    const [isLoading, setIsLoading] = useState(true);
   /* const [isError, setIsError] = useState(false)
    const [errMessage, setErrorMessage] = useState(false)
    const [data, setData] = useState(null); */
        useEffect(()=>{

            setTimeout(()=>{
        setIsLoading(false)
                
        }, 1000)
        
        },[url])
    return { isLoading};
     
}
 
export default useApi;
/*fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
            }).catch((err)=>{
               
                setIsError(true)
                setErrorMessage(err.message)
                setIsLoading(false)
                
            })
            */