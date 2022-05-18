import type { Component } from 'solid-js';
import styles from './Footer.module.css';

const Footer: Component = () => {
  return (
    <footer class={styles.wrapper}>
      <p>
        © {new Date().getFullYear()} Niclas Lövdahl.{' '}
        <a
          class={styles.link}
          href="https://github.com/niclaslovdahl/niclaslovdahl.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source
        </a>
      </p>
    </footer>
  );
};

export default Footer;
