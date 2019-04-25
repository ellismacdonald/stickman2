class StickMan {

   constructor(stage, assetManager, sounds) {
      this._eventStageExit = new createjs.Event("stageExit", true);
      this._velocity = 0;
      this._left = null;
      this._right = true;
      this._falling = true;
      this._dead = false;
      this._stage = stage;
      this._sprite = assetManager.getSprite("spritesheet");
      this._sounds = sounds;
      this._gameOver = false;
      stage.addChild(this._sprite);
   }

   // -------------------------------- SPRITE get
   getSprite(){
      return this._sprite;
   }

   // -------------------------------- VELOCITY get
   setVelocity(value){
      this._velocity = value;
   }

   // -------------------------------- SWING gets-set
   getSwinging(){
      return this._isSwinging;
   }

   setSwinging(value){
      this._isSwinging = value;
   }

   // -------------------------------- DEAD gets-set
   getDead(){
      return this._dead;
   }

   setDead(value){
      this._dead = value;
   }

   // -------------------------------- FALL gets-set
   setFalling(value){ // game.js onTick() -- 145
      this._falling = value;
   }

   // -------------------------------- GAME-OVER gets-set

   getGameOver(){
      return this._gameOver;
   }

   setGameOver(value){
      this._gameOver = value;
   }
   
   // remove sprite from stage, change animation to avoid game not ending
   remove(){
      this._sprite.gotoAndStop("walkRight");
      this._stage.removeChild(this._sprite);
   }

   // place stickman sprite at beginning of game -- game.js onPlay()
   resetMe() {
      this._sprite.gotoAndStop("walkRight");
      this._sprite.x = 100;
      this._sprite.y = this._stage.canvas.height - this._sprite.getBounds().height - 200
   }

   // called from tick in game.js 
   updateMe() {
      // checks if sprite hits bottom of canvas, initiates death animation and game over
      if(this._sprite.y + this._sprite.getBounds().height == 800){
         this._sprite.gotoAndPlay("death");
         this._sprite.y = this._stage.canvas.height - this._sprite.getBounds().height;
         this._falling = false;
         
         this._stage.update();
      }
      
      if (this._sprite.currentAnimation == "death"){
         this._dead = true;
         if(this._sprite.currentAnimationFrame == 1){
            this._sounds.getOuch();
         }

         if(this._sprite.currentAnimationFrame == 27){
            this._gameOver = true;
            this._sounds.getBoo();
            this._sprite.stop();
            this.remove();
         }
      }

      // transistions sprite downward 
      if(this._falling){
         if (this._velocity < 0) {
            this._velocity++;
         }
         else {
            this._velocity += 10 ;
         }
         
         // stops sprite at bottom of canvas
         this._sprite.y += this._velocity;
         if (this._sprite.y + this._sprite.getBounds().height >= this._stage.canvas.height) {
            this._sprite.y = this._stage.canvas.height - this._sprite.getBounds().height;
         }
         this._jumping = false;
         this._velocity = 0;
         }
      }

   
   swing(isSwinging, direction){
      // width used for off screen detection
      let width = this._sprite.getBounds().width;
      this._falling = false;
      this._isSwinging = isSwinging;
      
      if (isSwinging == true && direction == SwingState.LEFT){
         this._sprite.scaleX = -1;
         this._sprite.gotoAndPlay("swingRight");
         this._left = true;
         this._right = false
         if (this._sprite.x < -width) {
            this._sprite.x = this._stage.canvas.width;
            this._sprite.dispatchEvent(this._eventStageExit);
         }
      } else if ( isSwinging == true && direction == SwingState.RIGHT) {
         this._sprite.gotoAndPlay("swingRight");
         this._right = true;
         this._left = false;
         this._sprite.scaleX = 1;
         if (this._sprite.x > (this._stage.canvas.width + width)) {
            this._sprite.x = -width;
            this._sprite.dispatchEvent(this._eventStageExit);
         }
      }

      if(this._right){
         this._sprite.x = this._sprite.x + (this._sprite.currentAnimationFrame * 8);
         this._sprite.y = this._sprite.y - (this._sprite.currentAnimationFrame * 2);
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

   // stopMe() {
   //    this._sprite.stop();
   //    this._moving = false;
   // }

    // if (this._velocity < 0) {
      //    this._velocity++;
      // }
      // else {
      //    this._velocity += 1.5;
      // }
      // this._sprite.x += this._velocity;