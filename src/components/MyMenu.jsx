import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {Divide as Hamburger} from 'hamburger-react'

import './styles/MyMenu.css'

const MyMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='MyMenu'>
            <Hamburger 
                color='#fff' 
                toggled={isOpen} 
                toggle={setIsOpen} 
                size={20} 
                label='Menu'
            />

            <nav className={`Menu ${isOpen ? 'Active' : ''}`}>
                <Link 
                    to="/loja" 
                    className='LinkMenu' 
                    onClick={() => setIsOpen(false)}>
                        Loja
                </Link>
                <Link 
                    to="/loja" 
                    className='LinkMenu' 
                    onClick={() => setIsOpen(false)}>
                        Loja
                </Link>
                <Link 
                    to="/loja" 
                    className='LinkMenu' 
                    onClick={() => setIsOpen(false)}>
                        Loja
                </Link>
            </nav>
        </div>

    );
};

export default MyMenu