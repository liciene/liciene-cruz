import React from 'react';

import './App.css';

import {Link} from 'react-router-dom';

import profilephoto from './assets/home/Perfil.jpg';
import developmentButton from './assets/home/Development-Button.png';
import photographyButton from './assets/home/Photography-Button.png';
import designButton from './assets/home/Design-Button.png';
import artButton from './assets/home/Art-Button.png';

function App() {
  return (
    <div className='App'>
      <div className='Container'>
        <div className='Photo'>
          <img src={profilephoto} alt='Perfil' title='Foto de perfil' id='profilephoto'/>
        </div>
        
        <div class='ProfileDescription'>
          <div className='Presentation'>
            <h2>
                Olá!
            </h2>

            <p>Me chamo Liciene Juniara da Cruz, uma mulher noventista com raízes
              mato-grossenses, atualmente morando em Maringá-PR. Formada em Análise
              e Desenvolvimento de Sistemas, sou apaixonada por viagens, natureza,
              cultura, livros, gastronomia, criatividade e design.
              Adoro fotografia e tenho carinho especial por animais de estimação.
              Sou uma entusiasta da tecnologia, sempre buscando inovações para
              enriquecer minha trajetória profissional.
            </p>

            <p>
              Obrigado por visitar meu portfólio, espero que você encontre
              inspiração na minha jornada!
            </p>
          </div>
          
          <div className='Profiles'>
            <Link to="programacao">
              <button id='mododev'>
                <img src={developmentButton} alt='Development' width={'230px'}/>
              </button>
            </Link>

            <Link to="fotografia">
              <button id='photography'>
                <img src={photographyButton} alt='Photografy' width={'230px'}/>
              </button>
            </Link>

            <Link to="design">
              <button id='lacruz'>
                <img src={designButton} alt='Desig' width={'230px'}/>
              </button>
            </Link>

              <Link to="/arte">
                <button id='papiele'>
                  <img src={artButton} alt='Art' width={'230px'}/>
                </button>
              </Link>

          </div>
        </div>   
      </div>

    </div>
  );
}

export default App;
