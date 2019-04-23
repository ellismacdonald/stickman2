class Friend {
   constructor(stage, assetManager, stickMan){
      this._stage = stage;
      this._stickMan = stickMan;
      // console.log(this._stickMan._sprite.x);
      this._sprite = assetManager.getSprite("spritesheet");
      this._stage.addChild(this._sprite);
   }

   update(){
      // console.log('stickman: ', this._stickMan._sprite.y);
      // console.log('friend: ', this._sprite.y)
      // if(this._stickMan._sprite.y = this._sprite.y && this._stickMan._sprite.y){
      //    // console.log('winner');
      //    this._stickMan.setFalling(false);
      // }
   }

   resetMe(xpos, size) {
      // console.log(size);
      this._sprite.gotoAndPlay("jump");
      this._sprite.x = xpos + (size/4);
      this._sprite.y = 12;
      // this._sprite.mover.speed = this._maxSpeed;
   }

   remove(){
      this._stage.removeChild(this._sprite);

   }
}