class StickMan {

   constructor(stage, assetManager, maxSpeed, myX, myY, floor) {
      this._speed = 10;
      this._velocity = 0;
      this._jumpPower = 20;
      this._jumping = false;
      this._friction = 0.8;
      this._left = null;
      this._right = true;
      this._momentum = 0;
      this._falling = true;
      this._dead = false;
      this._state = 0
      this._stage = stage;
      this._sprite = assetManager.getSprite("spritesheet");
      this._gameOver = false;
      stage.addChild(this._sprite);
   }

   remove(){
      // console.log('remove');
      this._sprite.gotoAndStop("walkRight");

      this._stage.removeChild(this._sprite);

   }

   getSprite(){
      return this._sprite;
   }

   getSwinging(){
      return this._isSwinging;
   }

   getDead(){
      return this._dead;
   }

   setDead(value){
      // console.log(value);
      this._dead = value;
   }

   setFalling(value){
      // console.log('fuck fuck fuck');
      this._falling = value;
   }

   setVelocity(value){
      this._velocity = value;
   }

   getGameOver(){
      return this._gameOver;
   }

   setGameOver(value){
      this._gameOver = value;
   }

   resetMe() {
      this._sprite.gotoAndStop("walkRight");
      this._sprite.x = 100;
      this._sprite.y = 100;
      // this._sprite.y = this._stage.canvas.height - this._sprite.getBounds().height - 200
   }

   stopMe() {
      this._sprite.stop();
      this._moving = false;
   }

   updateMe() {
      // console.log(this._falling);
      if(this._sprite.y + this._sprite.getBounds().height == 800){
         this._sprite.gotoAndPlay("death");
         this._sprite.y = this._stage.canvas.height - this._sprite.getBounds().height;
         this._falling = false;
         
         this._stage.update();
      }
      
      if (this._sprite.currentAnimation == "death"){
         this._dead = true;
         if(this._sprite.currentAnimationFrame == 27){
            this._gameOver = true;
            this._sprite.stop();
            this.remove();
         }
         
      }

      if(this._falling){
         if (this._velocity < 0) {
            this._velocity++;
         }
         else {
            this._velocity += 10 ;
         }
      
         this._sprite.y += this._velocity;
         if (this._sprite.y + this._sprite.getBounds().height >= this._stage.canvas.height) {
            this._sprite.y = this._stage.canvas.height - this._sprite.getBounds().height;
         }
         this._jumping = false;
         this._velocity = 0;
         }
      }

   swing(isSwinging, direction){
      this._falling = false;
      this._isSwinging = isSwinging;
      if (this._velocity < 0) {
         this._velocity++;
      }
      else {
         this._velocity += 1.5;
      }
      this._sprite.x += this._velocity;
      if (isSwinging == true && direction == SwingState.LEFT){
         this._sprite.scaleX = -1;
         this._sprite.gotoAndPlay("swingRight");
         this._left = true;
         this._right = false
      } else if ( isSwinging == true && direction == SwingState.RIGHT) {
         this._sprite.gotoAndPlay("swingRight");
         this._right = true;
         this._left = false;
         this._sprite.scaleX = 1;
      }
      if(this._right){
         this._sprite.x = this._sprite.x + (this._sprite.currentAnimationFrame * 8);
         this._sprite.y = this._sprite.y - (this._sprite.currentAnimationFrame * 2);
         this._momentum = this._sprite.currentAnimationFrame
      } 
      if(this._left){
         this._sprite.x = this._sprite.x - (this._sprite.currentAnimationFrame * 8);
         this._sprite.y = this._sprite.y - (this._sprite.currentAnimationFrame * 2);
      }
      
      if(!isSwinging){
         this._sprite.gotoAndPlay("jump");
         this._falling = true;
         if (this._sprite.y - this._sprite.getBounds().height >= this._stage.canvas.height) {
            this._sprite.gotoAndPlay("death");
         }
      }
   }
}

SwingState.LEFT = 1;
SwingState.RIGHT = 2;
SwingState.FALLING = 3

StickMan.LEFT = 1;
StickMan.RIGHT = 2;


