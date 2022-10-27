import logo from '../assets/kasa logo.png';
import '../styles/Global.css';
import Banner from '../components/Banner';
function Homepage() {
  return (
    <>
      <div className="global-padding px-40">
        <nav className="navbar-container flex items-center justify-between w-full py-10">
          <img className="kasa-logo w-52 h-16" src={logo} alt="Kasa logo"></img>
          <div className="nav-items flex gap-40 pr-10">
            <p className="hover:underline-offset-2 hover:underline">Accueil</p>
            <p className="hover:underline-offset-2 hover:underline">A propos</p>
          </div>
        </nav>
        <Banner />
      </div>
    </>
  );
}

export default Homepage;
