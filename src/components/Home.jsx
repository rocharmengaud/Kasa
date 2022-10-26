import logo from '../assets/kasa logo.png';
import Island from '../assets/bg_img_1.png';
import '../styles/Navbar.css';

function Homepage() {
  return (
    <>
      <div className="global-padding px-40">
        <nav className="navbar-container bg-slate-500 flex items-center justify-between w-full py-10">
          <img className="kasa-logo w-52 h-16" src={logo} alt="Kasa logo"></img>
          <div className="nav-items flex gap-40 pr-10">
            <p>Accueil</p>
            <p>A propos</p>
          </div>
        </nav>
        <header className="home-header py-10">
          <img className="island rounded-3xl w-full" src={Island} alt="Island landscape"></img>
          <div className="text-over">
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
        </header>
      </div>
    </>
  );
}

export default Homepage;
