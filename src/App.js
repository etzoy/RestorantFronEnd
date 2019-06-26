import React from 'react';
import './App.css';
import BuscadorMenu from './componentes/BuscadorMenu';



function App() {
  return (
    <div className="containerApp">
     <div className="jumbotron">
     <p className="lead text-center">Buscador de Menu</p>
     <BuscadorMenu
     mensaje="Buscador..."
     />
     </div>
    </div>
  );
}

export default App;
