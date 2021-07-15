import Classes from '../Utils/navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <div className = {Classes.Navbar}>
            <h1 style = {{border: '5px solid white', fontSize: '20px', borderBlockColor: 'white'}}><Link to = '/' > <span style = {{backgroundColor: 'green', color: 'white', padding: '5px', fontSize: '40px'}}>GreenVille</span>.COM</Link></h1>
        
                <nav>
                    <Link to = '/'>Home</Link>
                    <Link to = '/login'>Login</Link>
                    <Link to = '/signup'>Signup</Link>
                </nav>
    
        </div>
     );
}
 
export default Navbar;