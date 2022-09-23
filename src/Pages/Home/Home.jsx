import React from 'react';
import Featured from '../../Componentes/Featured/Featured';
import ListContainers from '../../Componentes/LisContainer/ListContainers';
import Navbar from '../../Componentes/Navbar/Navbar';
import Sidebar from '../../Componentes/Sidebar/Sidebar';
import Widget from '../../Componentes/Widget/Widget';
import './Home.scss';

const Home = () => {
  return (
    <>
     <div className="home">
     <Sidebar/>
     <div className="middle_part">
         <Navbar/>
         <Widget/>
         <Featured/>
         <ListContainers/>  
     </div>
     </div>

    </>
  );
};

export default Home;