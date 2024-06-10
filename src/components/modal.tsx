import '../About.css';
import Arrow from "../assets/img/arrow.png";

type ModalProps = {
    name: string;
    dername: string;
    text: string;
}

const Modal: React.FC<ModalProps> = ({ name, dername, text }) => {
    return (
        <article className="introduction">
            <div className="int-blk_1">
                <h2>{name}</h2>
                <div>
                    <h4>{dername}</h4>
                    <img src={Arrow} alt="arrow" />
                </div>
            </div>
            <p>
                {text}
            </p>
        </article>
    );
}

export default Modal;