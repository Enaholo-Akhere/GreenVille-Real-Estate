import Classes from './success.module.css';
import {Link} from 'react-router-dom'
import Button from '../Utils/button';
import useApi from '../Hooks/useApi';
import Loading from '../Giphy/giphy';
import { FaUserPlus } from 'react-icons/fa';
const Success = () => {
    const { isLoading } = useApi('http://localhost:8000/reg')
    return ( 
        <div className={Classes.success_backdrop}>
            <div className={Classes.success}>
                {isLoading && <Loading/>}
                <div className = {Classes.inner_success}>
                    <h2>
                        Your Registration is successful;
                    </h2>
                    <Link to = "/owners">{<Button> View Users  <FaUserPlus/></Button>}</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Success;