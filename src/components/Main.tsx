import type { Component } from 'solid-js';
import './Main.css';

const Main: Component = () => {
  return (
    <main class="main">
      <div class="image" />
      <div class="text">
        <p>Hello, I'm Niclas.</p>
        <p>
          I am currently working as Lead Software Engineer at{' '}
          <a
            class="link"
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
          <a class="link" href="mailto:niclas.lovdahl@gmail.com">
            email
          </a>{' '}
          if you'd like to get in touch.
        </p>
      </div>
    </main>
  );
};

export default Main;
