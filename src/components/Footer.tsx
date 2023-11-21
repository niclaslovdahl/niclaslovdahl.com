import type { Component } from 'solid-js';
import './Footer.css';

const Footer: Component = () => {
  return (
    <footer class="wrapper">
      <p>
        © {new Date().getFullYear()} Niclas Lövdahl.{' '}
        <a
          class="link"
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
