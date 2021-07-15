import Classes from './success.module.css';
import {Link} from 'react-router-dom'
import Button from '../Utils/button';
const Success = () => {
    return ( 
        <div className={Classes.success}>
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