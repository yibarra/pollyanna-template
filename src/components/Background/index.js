import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as PIXI from 'pixi.js';
import { TimelineMax } from 'gsap';

import SliderBase from '../Slider/Base';

import './background.scss';

// background
class Background extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      current: false
    };

    this.animation = null;

    this.element = null;

    this.app = null;
    this.loader = PIXI.Loader.shared;
    this.stage = new PIXI.Container();
    this.ticker = new PIXI.Ticker();
    this.ticker.autoStart = false;
    this.textures = null;

    this.animationItems = this.animationItems.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateAnimation = this.updateAnimation.bind(this);
  }

  // component did mount
  componentDidMount() {
    this.element = ReactDOM.findDOMNode(this);

    this.app = new PIXI.Renderer({
      view: this.element.querySelector('canvas'),
      backgroundColor: 'transparent',
      height: window.innerHeight,
      width: window.innerWidth,
      resolution: window.devicePixelRatio,
      autoDensity: true
    });

    this.animation = new TimelineMax({ onComplete: this.ticker.stop(), paused: true, onUpdate: this.updateAnimation });

    this.createTextures(this.props.items);
  }

  // component did update
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location) {
      this.props.onPrevNext();
    }


    if (prevProps.current !== this.props.current || prevProps.last !== this.props.last) {
      this.onChange();
    }
  }

  animationItems() {
    const value = this.animation.totalProgress();
    
    if (value === 1) {
      this.ticker.stop();
    } else {
      const inverseValue = 1 - value;

      const last = this.stage.children[this.props.last];
      const current = this.stage.children[this.props.current];

      if (current instanceof Object) {
        current.alpha = value;

        if (last instanceof Object) {
          last.alpha = inverseValue;
        }
      }

      this.app.render(this.stage);
    }
  }

  // create textures
  createTextures(items) {
    if (this.stage instanceof Object === false || !Array.isArray(items)) return false;

    this.textures = items.map((item, i) => this.loader.add(`image${i}`, process.env.PUBLIC_URL + item));
    this.loader.load(this.onLoad);
  }

  // create sprite
  createSprite(items) {
    if (!Array.isArray(items)) return false;

    const { innerHeight, innerWidth } = window;

    for (let i = 0; i < items.length; i++) {
      const texture = this.loader.resources[`image${i}`].texture;
      const img = new PIXI.Sprite(texture);
    
      if (img instanceof Object) {
        img.anchor.x = 0.5;
        img.anchor.y = 0.5;
        img.position.x = innerWidth / 2;
        img.position.y = innerHeight / 2;

        img.height = innerHeight;
        img.width = innerWidth;

        if (i !== 0) {
          img.alpha = 0;
        }

        this.stage.addChild(img);
      }
    }

    this.app.render(this.stage);
  }

  // on load
  onLoad() {
    this.createSprite(this.textures);
    this.animation.add((e) => console.log('sip', e), 1);

    this.ticker.add(this.animationItems);
  }

  // on change
  onChange() {
    this.animation.restart();
  }

  // update animation
  updateAnimation() {
    if (this.animation.totalProgress() === 1) {
      this.ticker.stop();
    }

    this.ticker.start();
  }

  // render
  render() {
    return (
      <div className="background" onClick={() => this.props.onPrevNext()}>
        <canvas></canvas>
      </div>
    );
  }
};

export default SliderBase(Background);