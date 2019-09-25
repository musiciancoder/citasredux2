import React from 'react';
import AgregarCita from './componentes/AgregarCita';

import store from './store';
import { Provider } from 'react-redux';
//de Redux




function App() {
  return (
      // para que esté disponible redux, se debe agregar Provider
      <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Administrador de Pacientes de Veterinaria</h1>
        </header>

        <div className="row mt-3">
          <div className="col-md-m6">
        <AgregarCita/>
          </div>
          <div className="col-md-m6">
            <h1>Listado aqui</h1>
          </div>

        </div>
      </div>

      </Provider>
  );
}

export default App;
