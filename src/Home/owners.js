import Classes from './owners.module.css';
import Table  from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'
import useApi from '../Hooks/useApi';
import Loading from '../Giphy/giphy';
const Owners = () => {
    const {data, Courage, isLoading, errMessage} = useApi('http://localhost:8000/reg')
    
    return ( 
    <div className={Classes.owners}>
        {isLoading && <Loading/>}
        {errMessage && <div>{errMessage}</div> }
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
                <td>Owners Photo</td>
            </tr>
            {data.map((data, index )=>(
                
                <tr key = {data.id} >
                    <td>{index + 1}</td>
                    <td>{data.FirstName}</td>
                    <td>{data.LastName}</td>
                    <td> <Link to = {`/housedetails/${data.id}`}>{data.id}</Link> </td>
                    <td> <img src= {Courage}alt="GreenVille" width ="" height = "" /></td>
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