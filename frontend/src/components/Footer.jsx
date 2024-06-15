import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="footer-container ">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>SAHAYOGI</span></h3>
                            <p>Sahayogi Fund is a collaborative crowdfunding platform committed to fostering positive change.</p>
                            <div className="footer-icons">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Donate</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Get in touch</h5>
                            <p><i className="fa-solid fa-phone-volume"></i> +977 9861489611</p>
                            <p><i className="fa-solid fa-envelope"></i> sahayogi@gmail.com</p>
                            <p><i className="fa-solid fa-paper-plane"></i> Kathmandu,Nepal.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>



            </div>
        </>
    )
}

export default Footer;
