import React, { useEffect } from "react";
import css from "../../images/logo-images/css.png";
import "./canvas.styles.scss";

const Canvas = () => {
  const width = "100";
  const height = "100";
  let ctx;

  const createCanvas = () => {
    const canvas = document.querySelector(".canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };

  class Logo {
    constructor(x, y, velocityX, velocityY, size, logo) {
      this.x = x;
      this.y = y;
      this.velocityX = velocityX;
      this.velocityY = velocityY;
      this.size = size;
      this.logo = logo;
    }
    draw() {
      ctx.drawImage(this.logo, this.size, this.size);
    }
    updatePosition() {
      if (this.x + this.size >= width || this.x - this.size <= 0) {
        this.velocityX = -this.velocityX;
      }
      if (this.y + this.size >= height || this.y - this.size <= 0) {
        this.velocityY = -this.velocityY;
      }

      this.x += this.velocityX;
      this.y += this.velocityY;
    }
  }

  useEffect(() => {
    const image = new Image();
    image.src = css;
    const canvas = createCanvas();
    ctx = canvas.getContext("2d");
    const logo = new Logo(50, 50, 5, 5, 20, image);

    // const loopAnimation = () => {
    //   logo.draw();
    //   logo.updatePosition();

    //   requestAnimationFrame(loopAnimation);
    // };

    // loopAnimation();
  }, []);

  const logos = [];

  //

  return (
    <div>
      <canvas className="canvas"></canvas>
    </div>
  );
};

export default Canvas;
