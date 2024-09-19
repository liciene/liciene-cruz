import React from 'react';
import {Link} from 'react-router-dom';

import './styles/MyHeader.css';

import MyMenu from './MyMenu.jsx';

function MyHeader() {
    return (
        <div className='MyHeader'>
            <button>
                <Link to="/" className='MyLogo'>
                    Liciene Cruz
                </Link>
            </button>
            
            <div className='Rigth'>
                <button>
                    <Link to="/loja" className='Store'>
                        Compre
                    </Link>
                </button>

                <button>
                    <MyMenu/>
                </button>
            </div>
        </div>
    );
}

export default MyHeader