import Classes from '../Card/card.module.css';

const Card = (props) => {
    return(
        <div className="card">
            {props.children}
        </div>
    )
}

export default Card;