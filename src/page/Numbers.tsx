import '../About.css'
import '../Numbers.css';
import { FaArrowRight } from "react-icons/fa";
import Modal from '../components/modal';

type NumLinkProps  = {
    id: number;
    name: string;
    link: string;
}

export const linkBox: any[] = [
    {
        id: 1,
        link: "",
        name: "3D Conception & Design"
    },
    {
        id: 2,
        link: "",
        name: "Interaction Design"
    },
    {
        id: 3,
        link: "",
        name: "VR World User Testing"
    },
    {
        id: 4,
        link: "",
        name: "Hydra VR Deploy"
    },
]

export const NumLink:React.FC<NumLinkProps> = ({ id, name, link }) => {
    return(
        <div className='blockNum'>
            <div className='blockNum-cir'>
                <div>
                    <h3>0{id}</h3>
                </div>
            </div>
            <div onClick={() => {
                window.location.href=link
            }} className='blockNum-link'>
                <FaArrowRight />
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default function Numbers() {
    return(
        <section className='about numbers'>
            <Modal 
                name="HOW WE BUILD"
                dername="WITH HYDRA VR?"
                text="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
            />
            <article className='circlesNum'>
                {linkBox.map(key => 
                    <NumLink 
                        id={key.id}
                        link={key.link}
                        name={key.name}
                    />
                )}
            </article>
        </section>
    )
}