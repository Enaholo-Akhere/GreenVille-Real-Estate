import Classes from './footer.module.css';
import {Link} from 'react-router-dom';
import Button from '../Utils/button';
import Photo from '../photos/osayuki.jpg'
const Footer = () => {
    return ( 
        <footer className = {Classes.footers}>
            <div className = {Classes.innerfooter}>
            <h1 style = {{border: '5px solid white', fontSize: '20px', borderBlockColor: 'white'}}><Link to = '/' > <span style = {{backgroundColor: 'green', color: 'white', padding: '5px', fontSize: '40px'}}>GreenVille</span>.COM</Link></h1>
            </div>
            <div className={Classes.footergrid}>
                <div className={Classes.footerelement}>
                    <h4>CONTACT US</h4>
                    <Link to = "/">+234 905 278 1743</Link>
                    <Link to = "/">+ 234 808 778 8617</Link>
                    <Link to = "/">info@greenville.com</Link>
                    <Link to = "/">enaholoa@gmail.com</Link>
                    <Link to = "/">Facebook</Link>
                    <Link to = "/">Twitter</Link>
                </div>
                <div className={Classes.footerelement}>
                <h4>NOW SELLING</h4>
                    <Link to = "/">GreenVille Luxury</Link>
                    <Link to = "/">Amen Estate</Link>
                    <Link to = "/">Revolution Plus</Link>
                    <Link to = "/">Banana Island</Link>
                    <Link to = "/">Ernest Joe Home</Link>
                </div>
                <div className={Classes.footerelement}>
                    <h4>CITADEL</h4>
                    <div className = {Classes.image}>
                    <img src={Photo} alt="" className ={Classes.image__img} />
                     <div className={[Classes.image__overlay, Classes.image__overlay__blur].join(' ')}>
                         <div className={Classes.image__title}>Bricks</div>
                        <p className = {Classes.image__description}>Pinnacle of rest</p>
                      </div>
                      </div>
                </div>
                <div className={Classes.footerelement}>
                <h4>NEWS LETTER</h4>
                <form action="">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="" id="name" />
                    <label htmlFor="mail">E-Mail:</label>
                    <input type="email" name="" id="mail" />
                    <Button>Subscribe</Button>
                </form>
                </div>
      </div>
        </footer>

     );
}
 
export default Footer;