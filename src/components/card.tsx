import "../Reason.css"
import Button from "../components/button"

type CardPapams = {
    name: string;
    img: any;
    text: string;
}

const CardReason:React.FC<CardPapams> = ({name, img, text}) => {
    return(
        <div className="cardPro">
            <div>
                <img src={img} alt="picture" />
            </div>
            <h2>{name}</h2>
            <hr />
            <p>{text}</p>
            <Button params="TRY IT NOW"/>
        </div>
    )
}

export default CardReason;