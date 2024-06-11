import '../NavBar.css'
import Img1 from '../assets/img/icon.png';
import Img2 from '../assets/img/icon-text.png';
import Button from './button';

export default function NavBar() {
    const styles: React.CSSProperties = {
        border: "2px solid rgba(255, 255, 255, 1)",
        fontSize: "12px",
        fontWeight: "700",
        lineHeight: "14.63px",
        background: 'transparent',
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)"
    }

    return (
        <nav className='navBar'>
            <section className='iconBlock'>
                <img style={{
                    width: "102px",
                    height: "103px"
                }} src={Img1} alt="Image 1" />
                <img src={Img2} alt="Image 2" />
            </section>
            <section className='routesBlock'>
                <a href="/About">
                    <h2>ABOUT</h2>
                </a><a href="/Services">
                    <h2>SERVICES</h2>
                </a><a href="/Technologies">
                    <h2>TECHNOLOGIES</h2>
                </a><a href="/How_to">
                    <h2>HOW TO</h2>
                </a>
            </section>
            <section className='controller'>
                <button style={styles}>CONTACT US</button>
                <Button params='JOIN HYDRA' />
            </section>
        </nav>
    );
}
