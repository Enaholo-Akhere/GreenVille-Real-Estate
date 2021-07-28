import Button from "../button"
import {Link} from 'react-router-dom';
import Classes from '../errModal/errModal.module.css';

const ErrMessages = (props) => {
    
    return ( 
        <div className = {Classes.err__modal__container} onClick = {props.onCancel}>
        <div className = {Classes.backdrop} onClick = {props.onConfirm}/>
        <div className = {Classes.modal}>
            <header className={Classes.headrer}>
               <h1>{props.title}</h1>
            </header>
        <div className={Classes.content}>
            <p>{props.body}</p>
         </div>
        <div className={Classes.footer}>
            <footer className = {Classes.ErrFoo}>
                <div className = {Classes.button}>
                    <Link to = {props.url} ><Button onClick = {props.onClick} delete ={props.onCancel} >{props.btnname}</Button></Link>
                </div>
                <div className = {Classes.button}>
                    <Button onClick = {props.onCancel} >{props.cancel}</Button>
                </div>
            </footer>
        </div>
        </div>
        </div>
     );
}
 
export default ErrMessages;


