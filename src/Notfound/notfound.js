import Button from "../Utils/button"
import {Link} from 'react-router-dom'
import Classes from '../Notfound/nottfound.module.css'

const Notfound = () => {
    return ( 
        <div className={Classes.notfound}>
            <div className = {Classes.notfoundinner}>
            <h1>Error 404: Page Not Found</h1>
            <p>Click the link below to goto HOMEPAGE</p>
            </div>
            <Link to = '/' ><Button>HOME</Button></Link>
        </div>
     );
}
 
export default Notfound;
