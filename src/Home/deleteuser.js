import Classes from '../Home/deleteuser.module.css';
import Button from "../Utils/button";
import { FaAngleDoubleLeft } from 'react-icons/fa'

const DeleteUser = ({deleteuser}) => {

    const handleCancel = () => {
        deleteuser(false)
    }

    return ( 
        <div className = {Classes.del__backdrop}>
        <div className={Classes.delete__container}>
                <div className={Classes.deleteuser}>
                    <h1> Are You Sure?</h1>
                </div>

                <div className={Classes.deteteuser}>
                    <p className={Classes.deleteuser__paragraph}>Login as Admin to perform this operation...</p>
                </div>
                <div className={Classes.buttons}>
                    <div> <Button onClick = {handleCancel}><FaAngleDoubleLeft/> Back</Button> </div>
                </div>
        </div>
        </div>
     );
}
 
export default DeleteUser;