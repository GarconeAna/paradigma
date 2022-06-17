import React from 'react';
import { Routes, Route } from 'react-router-dom';

import "./styles/normalize.css";
import "./styles/webflow.css";
import "./styles/index.css";


import Home from './pages/home';
import ParadigmaPro from './pages/paradigma-pro';
import SobreNos from './pages/sobre-nos';
import Ranking from './pages/ranking';

function App() {
  return <>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/paradigma-pro' element={<ParadigmaPro />}/>
      <Route exact path='/sobre-nos' element={<SobreNos />}/>
      <Route exact path='/ranking' element={<Ranking />}/>
    </Routes>
  </>;
}

export default App;
