import React from 'react';
import { Link } from 'react-router-dom';
import '../ContactPage/Contact.css';
import { FaLinkedinIn, FaGithub, FaPhoneSquareAlt, FaRegEnvelope } from 'react-icons/fa';

function Contact() {
	return (
		<div className="contact">
			<ul className= "icon">
				<li>
					<a href="https://github.com/rahmedy" target="_blank">
						<i class="fa fa-github" aria-hidden="true" />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/rayan-a-5b0139124/" target="_blank">
						<i class="fa fa-linkedin" aria-hidden="true" />
					</a>
				</li>
				<li>
					<a href="mailto:rayanahmedy1999@gmail.com">
						<i class="fa fa-envelope" aria-hidden="true" />
					</a>
				</li>
				<li>
					<a href="#" class="open-modal" data-modal="#modal1">
						{' '}
						<i class="fa fa-phone-square" aria-hidden="true" />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Contact;
