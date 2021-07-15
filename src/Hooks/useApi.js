import {useEffect, useState} from 'react';
import Courage from '../photos/kola.jpeg';
import Ese from '../photos/engr ese.jpeg';
import Blessed from '../photos/Blessed.jpeg';
import Ab from '../photos/Ab.jpeg';
import Yuki from '../photos/yuki.jpeg';

const useApi = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    const [errMessage, setErrorMessage] = useState(false)
    const [data, setData] = useState(null);
    
        useEffect(()=>{
            setTimeout(()=>{
            fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
            }).catch((err)=>{
                setIsError(true)
                setErrorMessage(err.message)
            })
        }, 1000)
        },[url])
    return {data, Courage, Ese, Blessed, Ab, Yuki, isLoading, isError, errMessage};
     
}
 
export default useApi;