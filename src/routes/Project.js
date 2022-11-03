import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';

import HeroImg2 from '../components/HeroImg2.js';
import PricingCard from '../components/PricingCard.js';
import WorkCard from '../components/WorkCard.js';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJETS." 
                text="Trouvez tout mes projets ici"
      />
      <WorkCard/>
      <PricingCard/>
      <Footer />
    </div>
  )
}

export default Project