import Classes from './success.module.css';
import {Link} from 'react-router-dom'
import Button from '../Utils/button';
import useApi from '../Hooks/useApi';
import Loading from '../Giphy/giphy';
const Success = () => {
    const {isLoading, isError, errMessage} = useApi('http://localhost:8000/reg')
    return ( 
        <div className={Classes.success}>
             {isLoading && <Loading/>}
            <div className = {Classes.inner_success}>
                <h2>
                    Your Registration is successful;
                </h2>
                <Link to = "/">{<Button>Go Home</Button>}</Link>
            </div>
        </div>
     );
}
 
export default Success;