import Loading from '../photos/giphy.gif';
import Classes from './giphy.module.css';

const Giphy = () => {
    return ( 
        <div className = {Classes.giphy}>
            <img src={Loading} alt="" />
        </div>
     );
}
 
export default Giphy;