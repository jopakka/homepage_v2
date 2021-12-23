import React from "react";
import "./ContactItem.css";
import {FaEnvelopeSquare, FaFacebookSquare, FaGithubSquare, FaItchIo, FaLinkedin} from "react-icons/fa";

const ContactItem = ({href, type}) => {
    return (
        <a className="contact-item" href={href}
           target="_blank" rel="noopener noreferrer">
            {
                type === 0 ? <FaLinkedin/> :
                    type === 1 ? <FaGithubSquare/> :
                        type === 2 ? <FaFacebookSquare/> :
                            type === 3 ? <FaItchIo/> :
                                type === 4 ? <FaEnvelopeSquare/>
                                    : null
            }
        </a>
    );
};

export default ContactItem;