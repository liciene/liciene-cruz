import React, {useEffect} from 'react';

import {
    FaBehanceSquare, 
    FaGithubSquare, 
    FaDeviantart, 
    FaLinkedin, 
    FaFacebookSquare, 
    FaInstagramSquare, 
    FaTiktok
} from "react-icons/fa";

import './styles/MyFooter.css';

function MyFooter() {
    useEffect(() => {
        const seeMore = document.getElementById('seeMore');
        const footerContent = document.getElementById('footerContent');
    
        const toggleFooterContent= () => {
            const expanded = seeMore.getAttribute('aria-expanded') === 'true';
            seeMore.setAttribute('aria-expanded', !expanded);
            footerContent.style.display = expanded ? 'none' : 'block';
        };

        seeMore.addEventListener('click', toggleFooterContent)

        return () => {
            seeMore.removeEventListener('click', toggleFooterContent)
        };

    }, []);

    return (
        <div className='MyFooter'>
            <button id='seeMore' aria-expanded="false" aria-controls='footerContent' >Veja mais</button>
            
            <div id='footerContent' style={{ display: 'none' }}>
                <div>
                    <p className='Contact'>Entre em contato: <br/> 
                    <a href='https://api.whatsapp.com/send?phone=5566984187098'>(66)9 8418-7098 </a>  
                    ou <a href='https://mail.google.com/mail/'>cruz.liciene@gmail.com</a></p>
                </div>

                <div>
                    <div className='Icons'>
                        <a href="https://github.com/liciene" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <button>
                                <FaGithubSquare size={30}/>
                            </button>
                        </a>

                        <a href="https://www.behance.net/liciene" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <button>
                                <FaBehanceSquare size={30}/>
                            </button>
                        </a>

                        <a href="https://www.deviantart.com/liciene" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <button>
                                <FaDeviantart size={30}/>
                            </button>
                        </a>

                        <a href="https://www.linkedin.com/in/liciene/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <button>
                                <FaLinkedin size={30}/>
                            </button>
                        </a>

                        <a href="https://www.facebook.com/licienecruz/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <button>
                                <FaFacebookSquare size={30}/>
                            </button>
                        </a>

                        <a href="https://www.instagram.com/licienecruz/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <button>
                                <FaInstagramSquare size={30}/>
                            </button>
                            </a>

                        <a href="https://www.tiktok.com/@licienecruz?lang=pt-BR" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <button>
                                <FaTiktok size={30}/>
                            </button>
                        </a>
                    </div>
                </div>

                <div>
                    <p className='Copyright'>DESIGN & CODED BY LICIENE CRUZ © 2024</p>
                </div>
            </div>
        </div>
    );
}

export default MyFooter