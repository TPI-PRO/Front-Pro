import React from 'react';
import './App.css';
import Aux from './hoc/Aux'
import LoginView from './containers/LoginView/LoginView'

function App() {
  return (
    <Aux>
      <LoginView></LoginView>
    </Aux>
    
  );
}

export default App;
