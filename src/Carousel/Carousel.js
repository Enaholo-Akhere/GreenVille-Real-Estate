import {Carousel} from 'react-bootstrap'
import Classes from './Carousel.module.css'
const Carousels = (props) => {
    return ( 
     <div className={Classes.carousel}>
       <Carousel>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.photo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <div className = {Classes.container}>
      <h3 className = {Classes.h3}>Choose A Career</h3>
      <p className = {Classes.p}>Join thousands of our employees world wide as we look forward to spreading our tentacles.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.photo2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className = {Classes.container}> 
    <h3 className = {Classes.h3}>Can We Do It?</h3>
      <p className = {Classes.p}>What we cannot build does not exist thats why thousands of people trust us.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.photo3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className = {Classes.container}> 
    <h3 className = {Classes.h3}>Lets Do It</h3>
      <p className = {Classes.p}>We do not just build a house we build homes.</p></div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
     );
}
 
export default Carousels;