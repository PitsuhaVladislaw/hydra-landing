import Icon from "../assets/img/icon.png";
import Button from "../components/button";
import { RiTwitterFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export const textBox1: string[] = [
    "ABOUT", "SERVICES", "TECHNOLOGIES", "HOW TO JOIN HYDRA"
];

export const textBox2: string[] = [
    "F.A.Q", "SITEMAP", "CONDITIONS", "LICENSES"
];

export const listSocLink = [
    {
        icon: `<${FaFacebook} />`,
        link: "https://www.facebook.com/"
    },
    {
        icon: `<${RiTwitterFill} />`,
        link: "https://twitter.com/"
    },
    {
        icon: `<${FaLinkedinIn} />`,
        link: "https://www.linkedin.com/"
    },
    {
        icon: `<${FaYoutube} />`,
        link: "https://www.youtube.com/"
    },
    {
        icon: `<${FaInstagram} />`,
        link: "https://www.instagram.com/"
    },
    {
        icon: `<${FaPinterest} />`,
        link: "https://pinterest.com/"
    }
];

export function TabSocLinks() {
    const handleClick = (link: any): any => {
        window.location.href = link;
    };

    return (
        <div className="lineLinks">
            {listSocLink.map(elem =>
                <div onClick={() => handleClick(elem.link)}>
                    
                </div>
            )}
        </div>
    );
}

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
                    <Button params="BUILD YOUR WORLD" /> 
                </article> 
            </article> 
            <div></div> 
            <h5>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</h5> 
        </footer> 
    ) ;
}