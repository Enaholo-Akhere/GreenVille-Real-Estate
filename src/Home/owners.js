import Classes from './owners.module.css';
import Table  from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'
import useApi from '../Hooks/useApi';
import Loading from '../Giphy/giphy';
import ErrMessages from '../Notfound/errmessages';
import { FaTrash, FaEdit } from 'react-icons/fa';
import {useParams} from 'react-router-dom';

const Owners = () => {
    const {id} = useParams()
    const {data, Courage, isLoading, errMessage} = useApi('http://localhost:8000/reg')
    const handleDel = () =>{
        fetch('http://localhost:8000/reg/' + data.id, {
            method: 'DELETE'
        }).then(()=>{
            console.log("Deleted")
        })
    }

    const handleEdit = () =>{
        
    }
    
    return ( 
    <div className={Classes.owners}>
        {isLoading && <Loading/>}
        {errMessage && <div>{<ErrMessages title = {'Error 404: Page Not Found'} url = {'/'} btnname = {'REFRESH'} body = {errMessage} />}</div>}
        {data && <div>
      <h1>OWNERS</h1>
        
        <h2> GreenVille House Owners</h2>
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
                    <td><button onClick = {handleDel}>{<FaTrash/>}</button > <button onClick = {handleEdit}>{<FaEdit/>}</button></td>
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