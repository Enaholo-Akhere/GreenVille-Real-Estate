import Classes from './owners.module.css';
import Table  from 'react-bootstrap/Table';
import {Link,  useHistory} from 'react-router-dom';
import useApi from '../Hooks/useApi';
import Loading from '../Giphy/giphy';
import Dialogue from '../Utils/errModal/errmessages';
import { FaUserEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';

const Owners = ({deleteuser}) => {
    const history = useHistory();
    const [isTrue, setIsTrue] = useState(false);
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const {data, isLoading} = useApi('http://localhost:8000/reg')

    const handleDel = () =>{
        deleteuser(true)
        setTitle( data.FirstName + ' ' + 'Are You Sure?')
        setBody('once deleted cannot be retrieved...')
    }

    const deleteUser = () =>{
        fetch('http://localhost:8000/reg'+data.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/owners')
        })
        setIsTrue(false)
    }

    const handleEdit = () =>{

    }
    const onCancel = () =>{
        setIsTrue(false);
    }
    
    return ( 
    <div className={Classes.owners}>
        {isLoading && <Loading/>}
        {isTrue && <Dialogue title = {title} url = {'/owners'} cancel = {'Cancel'} btnname = {'Delete'} body = {body} onCancel = {onCancel} onClick = {deleteUser}/>}
        {data && <div>
      <h1>(GPF's)</h1>
        
        <h2> GreenVille Property Freeholders</h2>
        <div className={Classes.table}>
        <Table striped variant="dark" className ={Classes.innerdiv}>
            <tbody>
            <tr>
                <td>S/N</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>House ID</td>
                <td>Del/Edit</td>
            </tr>
            {data.map((data, index )=>(
                
                <tr key = {data.id} >
                    <td>{index + 1}</td>
                    <td>{data.FirstName}</td>
                    <td>{data.LastName}</td>
                    <td> <Link to = {`/housedetails/${data.id}`}>{data.id}</Link> </td>
                    <td><Link to = {'/owners'}><button onClick = {handleDel}>{<FaTrash/>}</button ></Link> <button onClick = {handleEdit}>{<FaUserEdit/>}</button></td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
        </div>}
    </div>
     );
}
 
export default Owners;