import './contact-info.css';
import image12 from './IMAGES/image 12.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



function ContactInfo () {
    return (
        <div className="contact-info">
            <h2 className="header3">contact us </h2>
                    <form className="container1">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Phone Number" required />
                        <input type="text" placeholder="E-mail" required />
                        <input type="text" placeholder="Interested In" />
                        <textarea id="message" placeholder="Message" required />
                    </form>
                     <button className="contact-btn">send email
                      <span><FontAwesomeIcon icon={ faArrowRight } /></span>
                     </button>

                    <div className="contact-image">
                       <img className="image12" src={ image12 } alt="" />
                    </div>  
            </div>     
        
    )
}

export default ContactInfo;