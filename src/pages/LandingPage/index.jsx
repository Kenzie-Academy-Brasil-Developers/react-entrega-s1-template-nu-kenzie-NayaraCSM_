import logo from '../../assets/logo-white.svg';
import landingPage from '../../assets/landingPage.svg';
import { Footer } from '../../components/Footer';
import { StyledLandingPage } from './style';

export const LandingPage = ({ setLogin }) => {
  return (
    <StyledLandingPage>
      <header>
        <img className='logo' src={logo} alt='logo do site versão branca.' />
        <h1 className='title_landing-page'>
          Centralize o controle das suas finanças
        </h1>
        <p className='info_landing-page'>de forma rápida e segura</p>
        <button className='button_redirect-home' onClick={() => setLogin(true)}>
          Iniciar
        </button>
      </header>
      <section className='conatiner_image'>
        <img
          className='image_right'
          src={landingPage}
          alt='Imagens ilustrativas de balões com conteúdos.'
        />
        <Footer />
      </section>
    </StyledLandingPage>
  );
};
