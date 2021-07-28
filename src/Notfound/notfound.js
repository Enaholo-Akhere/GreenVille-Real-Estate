
import Classes from '../Notfound/nottfound.module.css';
import ErrMessages from '../Utils/errModal/errmessages'

const Notfound = () => {
    return ( 
        <div className={Classes.notfound}>
            <ErrMessages url = '/' title = {'Error 404: Page Not Found'} body = {'Click the link below to goto HOMEPAGE'} btnname = {'HOME'}/>
        </div>
     );
}
 
export default Notfound;
