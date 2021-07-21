import Loading from '../photos/giphy2.gif';
import Classes from './giphy.module.css';

const Giphy = () => {
    return ( 
        <div className={Classes.container_giphy}>
        <div className = {Classes.giphy}>
            <img src={Loading} alt="" />
        </div>
        </div>
     );
}
 
export default Giphy;