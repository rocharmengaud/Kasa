import logo from '../assets/kasa logo.png';
import '../styles/Global.css';
import Banner from '../components/Banner';
import Card from '../components/Card';
function Homepage() {
  return (
    <>
      <nav className="navbar-container flex items-center justify-between w-full px-6 py-6">
        <img className="kasa-logo w-36 h-12" src={logo} alt="Kasa logo"></img>
        <div className="nav-items flex gap-4">
          <p className="hover:underline-offset-2 hover:underline">Accueil</p>
          <p className="hover:underline-offset-2 hover:underline">A propos</p>
        </div>
      </nav>
      <Banner />
      <div className="cards-container">
        <Card />
      </div>
    </>
  );
}

export default Homepage;
