import Button from '../components/button'
import '../Forma.css'

export default function Forma() {
    return(
        <section className='forma'>
            <header>
                <h1>JOIN HYDRA</h1>
                <hr />
                <h3>Let’s Build Your VR Experience</h3>
            </header>
            <form>
                <div>
                    <input placeholder='First Name' type="text" name="firstName" id="firstName" />
                    <input placeholder='Second Name' type="text" name="secondName" id="secondName" />
                </div>
                <div>
                    <input placeholder='Email' type="email" name="email" id="email" />
                    <input placeholder='Phone Number' type="tel" name="tel" id="tel" />
                </div>
                <input style={{width: '1068px'}} placeholder='Subject' type="text" name="subject" id="subject" />
                <textarea placeholder='Tell Us Something...' name="info" id="info"></textarea>
            </form>
            <Button params='SEND TO HYDRA' />
        </section>
    )
}