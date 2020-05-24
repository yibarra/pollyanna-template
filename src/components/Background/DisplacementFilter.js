import * as PIXI from 'pixi.js';

// displacement filters
class DisplacementFilters {
  // constructor
  constructor(app, stage) {
    this.displacementFilter = null;
    this.displacementSprite = null;

    this.app = null;
    this.loader = PIXI.Loader.shared;
    
    this.animationFilters = this.animationFilters.bind(this);
    this.load = this.load.bind(this);
    this.onLoad = this.onLoad.bind(this);

    this.load(app, stage);
  }

  // animation filters
  animationFilters(displacementSprite, value, inverse) {
    if (displacementSprite instanceof Object) {
      displacementSprite.scale.x = value * 80;
      displacementSprite.scale.y = value * 80;

      if (value > 5) {
        displacementSprite.scale.x = inverse * 90;
        displacementSprite.scale.y = inverse * 90;
      }
    }
  }

  // load
  load(app, stage) {
    if (app instanceof Object === false || stage instanceof Object === false) return false;

    this.app = app;
    this.stage = stage;

    if (app instanceof Object) {
      this.loader
        .add(`texture`, process.env.PUBLIC_URL + '/images/texture.jpg')
        .load(this.onLoad);
    }
  }

  // on load
  onLoad() {
    const { texture } = this.loader.resources.texture;

    this.displacementSprite = new PIXI.Sprite(texture);
    this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);
    this.displacementFilter.blendMode = PIXI.BLEND_MODES.NORMAL;
    this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    if (this.displacementFilter) {
      this.displacementSprite.anchor.set(0.5);
      this.displacementSprite.x = window.innerWidth / 2;
      this.displacementSprite.y = window.innerHeight / 2;
      this.displacementSprite.scale.x = 1;
      this.displacementSprite.scale.y = 1;

      this.stage.filters = [
        this.displacementFilter, 
        new PIXI.filters.BlurFilter(4, 4),
        new PIXI.filters.NoiseFilter(0.08)
      ];
      this.stage.addChild(this.displacementSprite);
    }
  }

  // get filter
  getDisplacementFilter() {
    return this.displacementFilter;
  }
}

export default DisplacementFilters;