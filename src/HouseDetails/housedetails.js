import Classes from '../HouseDetails/HouseDetails.module.css';
import Pho1 from '../photos/osayuki15.jpg';
import Pho2 from '../photos/ab3.jpg';
import Ab from '../photos/ab4.jpg';
import Ab1 from '../photos/ab13.jpg';
import Ab16 from '../photos/ab16.jpg';
import Courage from '../photos/Courage.jpg';
import Courage1 from '../photos/courage3.jpg';
import Courage4 from '../photos/courage4.jpg';
import Courage5 from '../photos/courage5.jpg';
import Courage7 from '../photos/courage7.jpg';
import Courage8 from '../photos/courage8.jpg';
import Courage14 from '../photos/courage14.jpg';
import Osayuki10 from '../photos/osayuki10.jpg';
import Osayuki6 from '../photos/osayuki16.jpg';
import Osayuki7 from '../photos/osayuki17.jpg';
import Miracle from '../photos/miracle.jpg';
import Miracle7 from '../photos/miracle7.jpg';
import Pho3 from '../photos/osayuki.jpg';
import ContGreen from '../photos/contact green.png';
import ContGif from '../photos/contgif.gif';
import Green from '../photos/green.png';
import Carousels from '../Carousel/Carousel'
import OurClients from '../photos/GreenVille Real Estate.png';
import Services from '../photos/our services.png';
import useApi from '../Hooks/useApi';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../Giphy/giphy';
import Dialogue from '../Utils/errModal/errmessages';
import Button from '../Utils/button';
import { useState } from 'react';


const HouseDetails = () => {
    const [isTrue, setIsTrue] = useState(false);
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const history = useHistory();
    const {id} = useParams()
    const { isLoading, data, isError, errMessage } = useApi('http://localhost:8000/reg/'+id);
    const handleDel = () =>{
        fetch('http://localhost:8000/reg/'+id, {
          method: 'DELETE'
      }).then(()=>{
          history.push('/owners')
          console.log(id)
      })
    }
    
    const onCancel = () =>{
        setIsTrue(false)
    }

    const onConfirm = ()=>{
        setIsTrue(true);
        setTitle(data.FirstName + 'Are You Sure?')
        setBody('once deleted cannot be retrieved...')
    }
    return ( 
        <>
        <div className ={Classes.Housedetails} onConfirm ={onCancel}>
            {isLoading && <Loading/> }
            {isError && <div>{errMessage}</div>}
            {isTrue && <Dialogue title = {title} url = {'/owners'} cancel = {'Cancel'} btnname = {'Delete'} body = {body} onCancel = {onCancel} onClick = {handleDel}/>}
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
                    <img src= {Pho1} alt=""/>
        
                    <hr />
                    </div>
                    <div className = {Classes.owner__container}>
                        <h2>OWNER'S DETAILS</h2>
                        <div className = {Classes.ownerdata}>
                    <p>NAME: {data.FirstName} {data.LastName}</p>
                    <p> HOUSE ID: {data.id}</p>
                    <p> BIO: {data.Bio}</p>
                    <p> PROPERTY WORTH: {data.Worth}</p>
                    </div>
                    </div>

                </div> 
            </section> 
        

            <div className={Classes.wrapper}>
            <h1>Front View</h1>
            <section className = {Classes.secdetails}>
                
                <div className={Classes.homedetails}>
                    <img src={Ab} alt="" />
                    <p>Bedroom</p>
                </div>
                <div className={Classes.homedetails}>
                    <img src={Ab16} alt="" />
                    <p>Bathroom</p>
                </div>
                <div className={Classes.homedetails}>
                    <img src={Courage} alt="" />
                    <p>Outside View</p>
                </div>
                <div className={Classes.homedetails}>
                    <img src={Courage1} alt="" />
                            <p>Party Room</p>
                </div>
                <div className={Classes.homedetails}>
                    <img src={Courage4} alt="" />
                            <p>Dinning 1</p>
                </div>
                <div className={Classes.homedetails}>
                    <img src={Courage5} alt="" />
                            <p>Dinning 2</p>
                </div>
                <div className={Classes.homedetails}>
                    <img src={Courage7} alt="" />
                            <p>Sitting Room</p>
                </div>
                <div className={Classes.homedetails}>
                    <img src={Ab} alt="" />
                            <p>Bedroom (Kids)</p>
                </div>

            </section>
            </div>
            <div className={Classes.wrapper}>
            <h1 className = {Classes.h1}>General View</h1>
            <section className = {Classes.secdetails}>
                
                <div className={Classes.homedetails}>
                <img src={Ab1} alt="" />
                <p>Master Bedroom</p>
                </div>
                <div className={Classes.homedetails}>
                <img src={Courage8} alt="" />
                <p>Bathroom</p>
                </div>
                <div className={Classes.homedetails}>
                <img src={Courage14} alt="" />
                <p>Bathroom 2</p>
                </div>
                <div className={Classes.homedetails}>
                <img src={Osayuki10} alt="" />
                <p>Movies</p>
                </div>
                <div className={Classes.homedetails}>
                <img src={Osayuki7} alt="" />
                <p>Gymnasium</p>
                </div>
                <div className={Classes.homedetails}>
                <img src={Osayuki6} alt="" />
                <p>Waiting Room</p>
                </div>
                <div className={Classes.homedetails}>
                <img src={Miracle} alt="" />
                <p>Swimming Pool</p>
                </div>
                <div className={Classes.homedetails}>
                <img src={Miracle7} alt="" />
                <p>Luxury Bedroom</p>
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
                 
                <Button onClick = {onConfirm}>DELETE DETAILS</Button>
            </div>}
        </div>
        </>
     );
}
 
export default HouseDetails;