class Friend {
   constructor(stage, assetManager){
      this._stage = stage;
      this._sprite = assetManager.getSprite("spritesheet");
      stage.addChild(this._sprite);
   }

   resetMe(xpos, size) {
      console.log(size);
      this._sprite.gotoAndPlay("jump");
      this._sprite.x = xpos + (size/4);
      this._sprite.y = 12;
      // this._sprite.mover.speed = this._maxSpeed;
   }
}