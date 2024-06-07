import VR from "../assets/img/VR.jpg";
import Arrow from "../assets/img/arrow.png";
import "../About.css";
import Button from "../components/button";

export default function About() {
    return(
        <section className="about">
            <article className="introduction">
                <div className="int-blk_1">
                    <h2>INTRODUCTION</h2>
                    <div>
                        <h4>TO HYDRA VR</h4>
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
                <p>
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p>
            </article>
            <article className="art-about">
                <img src={VR} alt="VR glass" />
                <div className="int-blk_2">
                    <div>
                        <h3>ABOUT</h3>
                        <h4>HYDRA VR</h4>
                    </div>
                    <p>
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
n tempor.
                    </p>
                    <Button params="LET’S GET IN TOUCH" />
                </div>
            </article>
        </section>
    )
}