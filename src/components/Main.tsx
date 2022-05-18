import type { Component } from 'solid-js';
import styles from './Main.module.css';

const Main: Component = () => {
  return (
    <main class={styles.main}>
      <div class={styles.image} />
      <div class={styles.text}>
        <p>Hello, I'm Niclas.</p>
        <p>
          Currently, I'm working as a Software Engineer at{' '}
          <a
            class={styles.link}
            href="https://se.devoteam.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devoteam
          </a>{' '}
          Malmö.
        </p>
        <p>
          Please send me an{' '}
          <a class={styles.link} href="mailto:niclas.lovdahl@gmail.com">
            email
          </a>{' '}
          if you'd like to get in touch.
        </p>
      </div>
    </main>
  );
};

export default Main;
