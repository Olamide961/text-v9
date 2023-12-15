import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCab, faCableCar, faEnvelope, faLocation, faLocationPin, faMap, faMapLocation, faPhone  } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <footer>
        <div class="footer-col">
            <h4>Information</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Certification</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
        <div class="footer-col1">
            <h4>Contact</h4>
                <a href="#"><span className="footer-icon"><FontAwesomeIcon icon={faLocationPin} /></span>44, Isaac John Fadeyi Lagos</a>
                <a href="#"><span className="footer-icon"><FontAwesomeIcon icon={faPhone} /></span>09021352564</a>
                <a href="#"><span className="footer-icon"><FontAwesomeIcon icon={faEnvelope} /></span>olajireolamide961@gmail.com</a>
        </div>

        <div class="footer-col">
            <h4>follow us</h4>
            <div class="links">
                <a href="#"><FontAwesomeIcon icon={faEnvelope } /></a>
                <a href="#"><FontAwesomeIcon icon={faLocation } /></a>
                <a href="#"><FontAwesomeIcon icon={faCab } /></a>
                <a href="#"><FontAwesomeIcon icon={faMap } /></a>
                
            </div>
        </div>
    </footer>
    )
}

export default Footer;