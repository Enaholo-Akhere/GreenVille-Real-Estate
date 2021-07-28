import Classes from './home.module.css';
import pht from '../photos/ab.jpg';
import pht2 from '../photos/Courage1.jpg';
import pht3 from '../photos/oro12.jpg';
import kola from '../photos/kola.jpeg';
import engr from '../photos/engr ese.jpeg';
import yuki from '../photos/yuki.jpeg';
import contact from '../photos/osayuki10.jpg';
import salesphoto from '../photos/Courage2.jpg';
import consultancy from '../photos/consultancy.png';
import Button from '../Utils/button';
import { Link } from 'react-router-dom'
const Home = () => {

    return ( 
    <div className={Classes.home}>
        <div className={Classes.wrapper}>
            <h1>GREENVILLE HOUSING</h1>
            <h6>Unique housing solutions for you.</h6>
            <div className = {Classes.image}>
                <img src={pht2} alt="" className ={Classes.image__img} />
                    <div className={[Classes.image__overlay, Classes.image__overlay__blur].join(' ')}>
                    <div className={Classes.image__title}>LETS GO IN :) </div>
                   <Link to = {'/owners'}><p className = {Classes.image__description}><Button >REGISTER NOW</Button></p></Link>
                   
                </div>
            </div>
        </div>
        <div className={Classes.aboutus}>
                    
            <div className={Classes.box_1}>
                <div className={Classes.inner_box1}>
                <h2 className={Classes.aboutheader}>
                      ABOUT THE COMPANY
                 </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo perspiciatis explicabo eveniet culpa fugit facilis dolore doloribus itaque quaerat.</p>
                </div>
            </div>
        
            <div className={Classes.box_2}>
                <img src={pht} alt="" />
            </div>
            <div className={Classes.box_3}>
                <img src={pht} alt="" />
            </div>
        </div>


        <div className={Classes.wwd}>
            <h2>WHAT WE DO</h2>
        <div className={Classes.wwd_grid}>
             <div className={Classes.inner_wwd}>
                    <img src={pht3} alt="" />
                    <h3>Residential Listings</h3>
                    <p>Over 150,000 available homes for every budget.</p>
            </div>

            <div className={Classes.inner_wwd}>
                    <img src={salesphoto} alt="" />
                    <h3>Sales and Leasing</h3>
                    <p>One-on-one assistance from search to purchase.</p>
            </div>

            <div className={Classes.inner_wwd}>
                    <img src={consultancy} alt="" />
                    <h3>Property Management</h3>
                    <p>Consultancy for clients with multiple properties.</p>
            </div>
            
        </div>
        <hr />
        </div>

        <div className={Classes.testimonials}>
            <h2>TESTIMONIALS</h2>
        <div className={Classes.testimonials_grid}>
             <div className={Classes.inner_testimonials}>
             <div className={Classes.img_wrapper}>
                    <img src={engr} alt="" />
                    </div>
                    <h3>Engr Esegborial Immarayi</h3>
                    <p>Testimonials from sincere clients are great ways to measure how well your business is thriving.</p>
            </div>

            <div className={Classes.inner_testimonials}>
            <div className={Classes.img_wrapper}>
                    <img src={kola} alt="" />
                    </div>
                    <h3>Courage Osemwengie</h3>
                    <p>Testimonials from sincere clients are great ways to measure how well your business is thriving.</p>
            </div>

            <div className={Classes.inner_testimonials}>
                    <div className={Classes.img_wrapper}>
                    <img src={yuki} alt="" />
                    </div>
                    <h3>Osayuki Omoreghae</h3>
                    <p>Testimonials from sincere clients are great ways to measure how well your business is thriving.</p>
            </div>
            
        </div>
        <hr />
        </div>
        <div className={Classes.contact}>
            <div className ={Classes.inner_contact1}>
                <img src={contact} alt="" />
            </div>
            <div className ={Classes.inner_contact2}>
                <h3>Contact Information</h3>
                <hr />
                <h4>Mailing Address</h4>
                <p>No 1 ready to work at both onsight and remote, pay should be encouraging, Ajah. Lagos</p>
                <h4>E-Mail Address</h4>
                <p>enaholoa@gmail.com</p>
                <h4>Phone No</h4>
                <p>+2349052781743  +2348087788617</p>
            <Button  >Contact Me</Button>
            </div>
        </div>
    </div>
     );
}
 
export default Home;