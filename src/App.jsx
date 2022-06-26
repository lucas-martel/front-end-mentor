import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import ImageHeroDesktop from './components/imgs/image-hero-desktop.png'
import ImageHeroMobile from './components/imgs/image-hero-mobile.png'
import LogoSnap from './components/imgs/logo.svg';

function App() {
  
  const windowIsMobile = () => {
    return document.body.clientWidth <= 1080
  }
  
  document.body.onresize = () => {
    document.getElementById('image-hero').src = getImageHero()
  }

  const getImageHero = () => {
    return windowIsMobile() ? ImageHeroMobile : ImageHeroDesktop
  }

  return (
    <div className="app-container">
      <div className='logo-container'>
                <img src={LogoSnap} alt="snap-logo" className="logo" />
            </div>
      <header>
        <Navbar windowIsMobile={windowIsMobile} />
      </header>
      <main id="presentation">
        <Presentation />
      </main>
      <aside>
          <img 
            id='image-hero' 
            src={getImageHero()} alt="" />
      </aside>
    </div>
  );
}

export default App;
