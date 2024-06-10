import "../About.css"
import "../Reason.css"
import Modal from '../components/modal';
import Card1 from "../assets/img/card1.jpg"
import Card2 from "../assets/img/card2.jpg"
import Card3 from "../assets/img/card3.jpg"
import Card4 from "../assets/img/card4.jpg"
import CardReason from "../components/card"

export const cardIngo:any[] = [
    {
        name: "SIMULATION",
        img: Card1,
        text: `Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`
    },
    {
        name: "EDUCATION",
        img: Card2,
        text: `Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`
    },
    {
        name: "SELF-CARE",
        img: Card3,
        text: `Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`
    },
    {
        name: "OUTDOOR",
        img: Card4,
        text: `Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.`
    }
] 

export default function Reason() {
    return(
        <section className="reason about">
            <Modal 
                name="HOW WE BUILD"
                dername="WITH HYDRA VR?"
                text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
            />
            <article className="cardReason">
                {cardIngo.map(card =>
                    <CardReason 
                        name={card.name}
                        img={card.img}
                        text={card.text}
                    />
                )}
            </article>
        </section>
    )
}