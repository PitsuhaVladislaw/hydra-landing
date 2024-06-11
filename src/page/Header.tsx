import Button from '../components/button'
import { PiArrowRightBold } from "react-icons/pi";
import VRGlass from '../assets/img/VRGlass.jpg';
import { BiMap } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import '../Header.css'

interface Objects {
    id: number;
    icon: JSX.Element;
    title: string;
    dertitle: string;
}

export const objects: Objects[] = [
    {
        id: 1,
        icon: <BiMap />,
        title: "Pay Us a Visit",
        dertitle: "Union St, Seattle, WA 98101, United States"
    },
    {
        id: 2,
        icon: <FiPhoneCall />,
        title: "Give Us a Call",
        dertitle: "(110) 1111-1010"
    },
    {
        id: 3,
        icon: <MdOutlineMailOutline />,
        title: "Send Us a Message",
        dertitle: "Contact@HydraVTech.com"
    }
]

export default function Header() {
    return(
        <header>
            <section className='mainBlock'>
                <article className='mainBlock-text'>
                    <h1><span>Dive </span>Into The Depths <br />Of <span>Virtual Reality</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore 
    nisl tincidunt eget. Lectus mauris eros in vitae .
                    </p>
                    <div>
                        <Button params='BUILD YOUR WORLD' />
                        <PiArrowRightBold />
                    </div>
                </article>
                <article className='mainBlock-img'>
                    <img src={VRGlass} alt="Image" />
                </article>
            </section>
            <section className='contBlock'>
                {objects.map(obj => (
                    <>
                        {obj.id > 1 && <hr />}
                        <article key={obj.id}>
                            {obj.icon}
                            <div>
                                <h4>{obj.title}</h4>
                                <h6>{obj.dertitle}</h6>
                            </div>
                        </article>
                    </>
                ))}
            </section>
        </header>
    )
}