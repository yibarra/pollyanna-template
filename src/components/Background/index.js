import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as PIXI from 'pixi.js';
import { TimelineMax } from 'gsap';

import CreateSprite from './CreateSprite';
import DisplacementFilters from './DisplacementFilter';
import SliderBase from '../Slider/Base';

import './background.scss';

// background
class Background extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.animation = null;
    this.element = null;

    this.app = null;
    this.filters = null;

    this.loader = PIXI.Loader.shared;
    this.stage = new PIXI.Container();

    this.sprites = [];

    this.ticker = new PIXI.Ticker();
    this.ticker.autoStart = false;

    this.animationItems = this.animationItems.bind(this);
    this.animationItemValue = this.animationItemValue.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateAnimation = this.updateAnimation.bind(this);
  }

  // component did mount
  componentDidMount() {
    this.element = ReactDOM.findDOMNode(this);

    if (this.element instanceof Object) {
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

    this.onResize();
    window.addEventListener('resize', this.onResize, false);
  }

  // component did update
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location) {
      this.props.onPrevNext();
      this.onChange();
    }
  }

  // component unmount
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  // animation items
  animationItems() {
    const value = this.animation.totalProgress();

    const last = this.sprites[this.props.last];
    const current = this.sprites[this.props.current];
    
    if (value >= 1) {
      this.animationItemValue(current, 1, last, 0);

      this.ticker.stop();
    } else {
      const inverseValue = 1 - value;
      this.animationItemValue(current, value, last, inverseValue);
      this.filters.animationFilters(this.filters.displacementSprite, value, inverseValue);
    }

    this.app.render(this.stage);
  }

  // animation item value
  animationItemValue(current, value, last, valueLast) {
    if (current instanceof Object) {
      current.alpha = value;
    }

    if (last instanceof Object) {
      last.alpha = valueLast;
    }
  }

  // create textures
  createTextures(items) {
    if (this.stage instanceof Object === false || !Array.isArray(items)) return false;

    const textures = items.map((item, i) => this.loader.add(`image${i}`, process.env.PUBLIC_URL + item));
    this.filters = new DisplacementFilters(this.app, this.stage);
    
    this.loader.load(() => this.onLoad(textures));
  }

  // on load
  onLoad(textures) {
    // sprites
    const sprites = new CreateSprite(this.app, this.stage, this.loader, textures);
    this.sprites = sprites.createSpritesGallery();

    // animation default
    this.animation.add(() => console.info('animation bg'), 1.4);
    this.ticker.add(this.animationItems);
  }

  // on change
  onChange() {
    if (this.animation.paused()) {
      this.animation.play();
    } else {
      this.animation.restart();
    }
  }

  // on resize
  onResize() {
    const { innerWidth, innerHeight } = window;

    this.app.view.style.height = `${innerHeight}px`;
    this.app.view.style.width = `${innerWidth}px`;
  }

  // update animation
  updateAnimation() {
    if (this.animation.totalProgress() >= 1)
      this.ticker.stop();

    this.ticker.start();
  }

  // render
  render() {
    return (
      <div className="background">
        <canvas />
      </div>
    );
  }
};

export default SliderBase(Background);