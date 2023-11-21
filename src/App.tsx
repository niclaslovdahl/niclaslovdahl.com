import { Component, lazy } from 'solid-js';

import './App.css';
import IconLinks from './components/IconLinks';
import Main from './components/Main';
import Footer from './components/Footer';
const Background = lazy(() => import('./components/Background'));

const App: Component = () => {
  return (
    <>
      <Background />
      <div class="app">
        <header class="header">
          <h3>Niclas Lövdahl</h3>
          <IconLinks />
        </header>
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
