import Classes from '../Utils/button.module.css';
const Button = (props) => {
    return ( 
        <button className = {Classes.button} onClick ={props.onClick}>{props.children}</button>
     );
}
 
export default Button;