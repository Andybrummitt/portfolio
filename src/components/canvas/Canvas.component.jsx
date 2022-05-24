import React, { useEffect, useState } from "react";
import css from "../../images/logo-images/css.png";
// get firebase
import "./canvas.styles.scss";

const Canvas = () => {
  const [logos, setLogos] = useState([]);
  const [ctx, setCtx] = useState("");
  const [canvas, setCanvas] = useState("");
  const width = window.innerWidth;
  const height = window.innerHeight;

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
      console.log(ctx);
      ctx.drawImage(this.logo, this.x, this.y, this.size, this.size);
    }
    updatePosition() {
      if (this.x + this.size >= width || this.x - this.size <= 0 - this.size) {
        this.velocityX = -this.velocityX;
      }
      if (this.y + this.size >= height || this.y - this.size <= 0 - this.size) {
        this.velocityY = -this.velocityY;
      }
      this.x += this.velocityX;
      this.y += this.velocityY;
    }
  }

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createLogo = (imgObj, image) => {
    imgObj.src = image;
    const size = 50;
    return new Logo(
      random(size, width - size),
      random(size, height - size),
      2,
      2,
      size,
      imgObj
    );
  };

  useEffect(() => {
    console.log(ctx);
  }, [ctx]);

  useEffect(() => {
    if (canvas) {
      setCtx(canvas.getContext("2d"));
      const images = [css];

      images.forEach((image) => {
        let imgObj = new Image();
        const logo = createLogo(imgObj, image);
        imgObj.onload = () => setLogos((prevState) => [...prevState, logo]);
      });
    }
  }, [canvas]);

  useEffect(() => {
    setCanvas(createCanvas());
  }, []);

  useEffect(() => {
    //  IF LOGOS ARE ALL LOADED
    if (logos.length !== 1 && !ctx) return;
    console.log(ctx);
    const loopAnimation = () => {
      logos.forEach((logo) => {
        console.log(logo);
        ctx.fillRect(0, 0, width, height);
        logo.draw();
        logo.updatePosition();
        requestAnimationFrame(loopAnimation);
      });
    };
    loopAnimation();
  }, [logos]);

  //

  return (
    <div>
      <canvas className="canvas"></canvas>
    </div>
  );
};

export default Canvas;
