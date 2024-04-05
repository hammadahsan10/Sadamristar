import React from 'react'
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {

    const openTwitter = () => {
        window.open('https://twitter.com/', '_blank');
    };

    const openFacebook = () => {
        window.open('https://www.facebook.com/', '_blank');
    };

    const openWhatsapp = () => {
        window.open('https://web.whatsapp.com/', '_blank');
    };

    return (
        <div className='footer'>
            <div className="footer-icons mt-1 mb-1">
                <FaTwitter className="social-icon" onClick={openTwitter} />
                <FaFacebook className="social-icon" onClick={openFacebook} />
                <FaWhatsapp className="social-icon" onClick={openWhatsapp} />
            </div>
            <div>
                <h6 className='mt-2'>© 2024 Shiromani Akali Dal (Amritsar)</h6>
            </div>
        </div>
    )
}

export default Footer
