import React from "react";
import "./Footer.css"
import { FaInstagram, FaFacebook } from "react-icons/fa";


const Footer = () => {
    return(
            <footer className="Footer">
                <p className="copy">&copy;2023 - Devs Café</p>
                    <div className="footerLinks">
                        <ul> 
                            <p>Contatos</p>
                            <li>
                                <a href="#"> <FaInstagram />&nbsp; Devs Café Instagram</a>
                            </li>
                            <li>
                                <a href="#"> <FaFacebook />&nbsp; Devs Café Facebook</a>
                            </li>
                        </ul>
                        <ul> 
                            <p>Outros</p>
                            <li>
                                <a href="#">Últimas notícias</a>
                            </li>
                            <li>
                                <a href="#">Sobre</a>
                            </li>
                        </ul>
                    </div>
                </footer>

    )

}


export default Footer;