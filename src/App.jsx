import React from "react";
import Footer from './components/footer/Footer'
import Main from "./components/navbar/Main";

import Awards from './components/sections3/Awards';
import GlobalPresence from './components/sections3/GlobalPresence';
import NumberComponent from './components/sections3/NumberComponent';
import LastButOneFooter from './components/lastButOneFoot/LastButOneFooter';
import RedBus2 from './components/secondSection/RedBus2';
import Redbus3 from "./components/secondSection/Redbus3";
import Navbar from './components/navbar/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <RedBus2 />
      <Redbus3/>
      <Awards />
      <GlobalPresence />
      <NumberComponent />
      <LastButOneFooter />
      <Footer />

    </div>
  );
};

export default App;

