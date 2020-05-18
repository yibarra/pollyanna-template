import * as PIXI from 'pixi.js';

// create sprite
class CreateSprite {
  // constructor
  constructor(app, stage, loader, textures) {
    this.app = app;
    this.stage = stage;
    this.loader = loader;
    this.textures = textures;

    this.items = [];
  }

  // create sprite
  createSpritesGallery() {
    if (this.stage instanceof Object === false) return false;

    for (let i = 0; i < this.textures.length; i++) {
      const texture = this.loader.resources[`image${i}`].texture;
      const img = this.spriteProperties(texture, this.app.view.height, this.app.view.width);
    
      if (img instanceof Object) {
        if (i !== 0)
          img.alpha = 0;
    
        this.items.push(img);
        this.stage.addChild(img);
      }
    }

    if (this.app instanceof Object) {
      this.app.render(this.stage);
    }

    return this.items;
  }

  // sprite properties
  spriteProperties(texture, height, width) {
    if (texture instanceof Object === false) return false;

    const img = new PIXI.Sprite(texture);

    img.anchor.x = 0.5;
    img.anchor.y = 0.5;
    img.position.x = width / 2;
    img.position.y = height / 2;

    img.height = height;
    img.width = width;

    return img;
  }
}

export default CreateSprite;