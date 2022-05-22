import { Component, lazy } from 'solid-js';

import styles from './App.module.css';
import IconLinks from './components/IconLinks';
import Main from './components/Main';
import Footer from './components/Footer';
const Background = lazy(() => import('./components/Background'));

const App: Component = () => {
  return (
    <>
      <Background />
      <div class={styles.App}>
        <header class={styles.header}>
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
