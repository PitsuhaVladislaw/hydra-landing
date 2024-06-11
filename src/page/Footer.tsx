import Icon from "../assets/img/icon.png";
import Button from "../components/button";
import { FaFacebook, FaLinkedinIn, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa';
import { RiTwitterFill } from 'react-icons/ri';

export const textBox1: string[] = [
    "ABOUT", "SERVICES", "TECHNOLOGIES", "HOW TO JOIN HYDRA"
];

export const textBox2: string[] = [
    "F.A.Q", "SITEMAP", "CONDITIONS", "LICENSES"
];

export const listSocLink = [
    {
        icon: <FaFacebook />,
        link: "https://www.facebook.com/"
    },
    {
        icon: <RiTwitterFill />,
        link: "https://twitter.com/"
    },
    {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/"
    },
    {
        icon: <FaYoutube />,
        link: "https://www.youtube.com/"
    },
    {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/"
    },
    {
        icon: <FaPinterest />,
        link: "https://pinterest.com/"
    }
];

export const handleClick = (link: string): void => {
    window.location.href = link;
};

export default function Footer() {
    const styles: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: "19.5px"
    };

    return (
        <footer> 
            <article> 
                <img src={Icon} alt="Logo" /> 
                <hr /> 
                <div style={styles}> 
                    {textBox1.map(text =>  
                        <h6>{text}</h6> 
                    )} 
                </div> 
                <hr /> 
                <div style={styles}> 
                    {textBox2.map(text => 
                        <h6>{text}</h6> 
                    )} 
                </div> 
                <hr /> 
                <article className="tabSocLinks"> 
                    <h6>SOCIALIZE WITH HYDRA</h6> 
                    <div className="lineLinks">
                        {listSocLink.map(elem => (
                            <div onClick={() => handleClick(elem.link)}>
                                {elem.icon}
                            </div>
                        ))}
                    </div>
                    <Button params="BUILD YOUR WORLD" /> 
                </article> 
            </article> 
            <hr style={{
                height: "1px",
                width: "1269px",
                border: "1px solid transparent",
                borderRadius: "100%",
                background: "linear-gradient(179.87deg, #343045 0.47%, #C0B7E8 35.21%, #8176AF 68.91%, #343045 99.5%)"
            }} />
            <h5>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</h5> 
        </footer> 
    ) ;
}