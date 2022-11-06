import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

import '../styles/Global.css';
import '../styles/Navbar.css';

import Logements from '../data/Logements.json';
function Homepage() {
  return (
    <>
      <div className="content lg:px-32 px-6">
        <Navbar />
        <Banner />
        <div className="box-container lg:border-2 lg:p-8 lg:bg-gray-200 lg:rounded-3xl lg:mb-6">
          <div className="cards-container lg:grid lg:grid-cols-3 lg:gap-8 flex flex-col">
            {Logements.map((logement, index) => (
              <Card {...logement} key={logement.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
