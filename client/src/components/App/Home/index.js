// == Import npm
import React from 'react';

// == Import
import './style.css';

import Introduction from 'src/containers/App/Home/Introduction';
import Presentation from 'src/components/App/Home/Presentation';
import Conclusion from 'src/containers/App/Home/Conclusion';

// == Composant
const Home = () => (
  <div className="home">
    <Introduction />
    <Presentation />
    <Conclusion />
  </div>
);

// == Export
export default Home;
