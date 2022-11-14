import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';

import Island from '../assets/bg_img_1.png';

import '../styles/Global.css';

import Logements from '../data/Logements.json';
function Homepage() {
  return (
    <>
      <div className="content lg:px-32 px-6">
        <Navbar />
        {/* on met ici des espace insécables pour forcer un br en version mobile*/}
        <Banner imgSrc={Island} description={'Chez vous, partout et ailleurs'} />
        <div className="box-container lg:p-8 lg:bg-[#F6F6F6] lg:rounded-3xl lg:mb-6">
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
