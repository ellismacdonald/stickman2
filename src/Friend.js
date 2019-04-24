class Friend {
   constructor(stage, assetManager, stickMan){
      this._stage = stage;
      this._stickMan = stickMan;
      this._sprite = assetManager.getSprite("spritesheet");
      this._stage.addChild(this._sprite);
   }

   resetMe(xpos, size) {
      this._sprite.gotoAndPlay("jump");
      this._sprite.x = xpos + (size/4);
      this._sprite.y = 65;
   }

   remove(){
      this._stage.removeChild(this._sprite);
   }
}