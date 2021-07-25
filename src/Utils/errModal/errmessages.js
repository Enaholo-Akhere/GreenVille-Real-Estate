import Button from "../Utils/button"
import {Link} from 'react-router-dom'

const ErrMessages = (props) => {
    return ( 
        <>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <Link to = {props.url} ><Button>{props.btnname}</Button></Link>
        </>
     );
}
 
export default ErrMessages;


