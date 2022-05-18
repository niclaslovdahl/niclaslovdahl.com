import { Component, onMount } from 'solid-js';
import p5 from 'p5';

const Background: Component = () => {
  let canvasContainer: HTMLDivElement | undefined;

  window.document.addEventListener(
    'touchmove',
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  const Sketch = (p: p5) => {
    let stars: Star[] = [];
    const nbrStars = 150;
    let timeoutId: number;

    const initStars = () => {
      stars = [];
      for (let i = 0; i < nbrStars; i++) {
        stars.push(new Star());
      }
    };

    class Star {
      colorAlpha: number;
      x: number;
      y: number;
      z: number;

      color: string;

      constructor() {
        const colors = [
          'rgba(128,185,254,', // #80B9FE
          'rgba(204,0,0,', // #CC0000
          'rgba(248,220,87,', // #F8DC57
          'rgba(28,245,186,', // #1CF5BA
          'rgba(94,33,217,', // #5E21D9
          'rgba(212,65,208,', // #D441D0
          'rgba(128,185,254,', // #80B9FE
          'rgba(245,166,35,', // #F5A623
          'rgba(126,211,33,', // #7ED321
          'rgba(248,231,28,', // #F8E71C
        ];

        this.colorAlpha = 0.0;
        this.x = p.random(-p.width, p.width);
        this.y = p.random(-p.height, p.height);
        this.z = p.random(0, p.width);
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.z = this.z - p.width / 200;
        if (this.z < 1) {
          this.z = p.width;
          this.x = p.random(-p.width, p.width);
          this.y = p.random(-p.height, p.height);
        }
      }

      show() {
        p.fill(255);
        p.noStroke();

        let sx = p.map(this.x / this.z, 0, 1, 0, p.width);
        let sy = p.map(this.y / this.z, 0, 1, 0, p.height);

        let r = p.map(this.z, 0, p.width, 20, 0);

        if (this.colorAlpha < 1) {
          this.colorAlpha += 0.01;
        }

        let color = this.color + this.colorAlpha + ')';
        p.fill(color);
        p.ellipse(sx, sy, r, r);
      }
    }

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
      stars = [];

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        initStars();
      }, 1000);
    };

    p.setup = () => {
      const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      initStars();
    };

    p.draw = () => {
      p.background(255);
      p.translate(p.width / 2, p.height / 2);
      for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
      }
    };
  };

  onMount(async () => {
    new p5(Sketch, canvasContainer);
  });

  return <div ref={canvasContainer} />;
};

export default Background;
