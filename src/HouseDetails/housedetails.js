import Classes from '../HouseDetails/HouseDetails.module.css';
import Pho from '../photos/ab1.jpg';
import Pho1 from '../photos/osayuki15.jpg';
import Pho2 from '../photos/ab3.jpg';
import Pho3 from '../photos/osayuki.jpg';
import ContGreen from '../photos/contact green.png';
import ContGif from '../photos/contgif.gif';
import Green from '../photos/green.png';
import Carousels from '../Carousel/Carousel'
import OurClients from '../photos/GreenVille Real Estate.png';
import Services from '../photos/our services.png';
import useApi from '../Hooks/useApi';
import { useParams } from 'react-router-dom';
import Loading from '../Giphy/giphy';



const HouseDetails = () => {
    const {id} = useParams()
    const {data, isLoading, isError, errMessage} = useApi('http://localhost:8000/reg/' + id);
    return ( 
        
        <div className ={Classes.Housedetails}>
            {isLoading && <Loading/> }
            {isError && <div>{errMessage}</div>  }
            {data && <div><section className={Classes.siteinfo}>
                         <div className={Classes.innerinfo}>
                            <img src={ContGif} alt="" />
                        </div>

                        <div className={Classes.innerinfo}>
                            <img src={ContGreen} alt="" />
                        </div>

                        <div className={Classes.innerinfo}>
                             <img src={Green} alt="" />
                        </div>
            </section>

            <section className = {Classes.container}>
                <div className={Classes.owner}>
                    <div className ={Classes.img}> 
                    <img src= {Pho}  alt=""/>
                    <hr />
                    </div>
                    <div>
                        <h2>OWNER'S DETAILS</h2>
                    <p>NAME: {data.FirstName} {data.LastName}</p>
                    <p>BIO: {data.Bio}</p>
                    <p>PROPERTY WORTH: {data.Worth}</p>
                    </div>

                </div> 
            </section> 
        

            <div className={Classes.wrapper}>
            <h1>Front View</h1>
            <section className = {Classes.secdetails}>
                
                <div className={Classes.homedetails}>
                    
                </div>

            </section>
            </div>
            <div className={Classes.wrapper}>
            <h1 className = {Classes.h1}>General View</h1>
            <section className = {Classes.secdetails}>
                
                <div className={Classes.homedetails}>
                    
                </div>
            </section>
            </div>

            <section className={Classes.quotes}>
                <article>
                    <h2>Estate Details</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora fugit, distinctio, voluptatibus itaque perspiciatis excepturi possimus inventore ad quidem cupiditate at aperiam nobis officia quod. Velit architecto nobis inventore. Fugiat itaque rerum unde perspiciatis explicabo minus quam reiciendis assumenda soluta labore doloribus consequuntur dignissimos alias similique recusandae veritatis nesciunt, illo fugit, sed qui. Veniam illum alias modi incidunt delectus perferendis. Laborum ex molestiae corrupti animi exercitationem! Culpa repellendus numquam laudantium, doloribus dolorum aspernatur placeat ullam debitis totam, possimus modi vero sunt officiis. Culpa repudiandae corporis deleniti iusto rerum illo quidem impedit repellendus, distinctio nam asperiores rem beatae sit eos.</p>
                </article>
            </section>
            <section className={Classes.adsel}>
                <div className={Classes.innerslide}>
                    {<Carousels photo1 = {Pho1} photo2 = {Pho2} photo3 = {Pho3}/>}
                    <p>GreenVille Estate Developers</p>
                </div>
            </section>
            <div className={Classes.clients}>
                <div className={Classes.Pho}>
                    <img src={OurClients} alt="" />
                </div>
                
            </div>     
            <div className={Classes.service}>
                <div className={Classes.servicepho}>
                    <img src={Services} alt="" />
                </div>
                
                 </div>        
            </div>}
        </div>
     );
}
 
export default HouseDetails;