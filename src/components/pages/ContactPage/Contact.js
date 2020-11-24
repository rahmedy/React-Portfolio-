import React from 'react';
import { Link } from 'react-router-dom';
import '../ContactPage/Contact.css';
import { FaLinkedinIn, FaGithub, FaPhoneSquareAlt, FaRegEnvelope } from 'react-icons/fa';


function Contact() {
    return (
        <div className= 'contact'>
            <ul className='list'>

                <li>
                <Link to='https://github.com/rahmedy' className="per">
                    <FaGithub className ='icon-c' />
                </Link>
                </li>
                <li>
                    <Link to='https://www.linkedin.com/in/rayan-a-5b0139124/' className="per">
                        <FaLinkedinIn className='icon-c' />
                    </Link>
                </li>
                <li>
                    <Link to='/' className="per">
                        <FaRegEnvelope className='icon-c' />
                    </Link>
                </li>
                <li>
                    <Link to='/' className="per">
                        <FaPhoneSquareAlt className='icon-c' />
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default Contact
