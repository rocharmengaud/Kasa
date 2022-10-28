import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

import '../styles/Global.css';
import '../styles/Navbar.css';

import LogementsData from '../data/Logements.json';
function Homepage() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="cards-container flex flex-col">
        <Card data={LogementsData} />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
