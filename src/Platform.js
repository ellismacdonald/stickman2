class Platform{
   constructor(stickMan, stage, sounds){
      // sound class
      this._sounds = sounds;
      // stage
      this._stage = stage;
      // postions of objects
      this._xpos = null;
      this._ypos = null;
      this._xwidth = null;
      this._yheight = 20;
      
      // platform variables
      // this._platform1 = null;
      this._platform1 = null;
      this._platform2 = null;
      this._startingPlatform = null;
      this._startingPlatformDimensions = null;

      // winning platform position and size
      this._winPlatform = null;
      this._winPlatX = null
      this._winPlatW = null;

      // check if game is won using winning platform dimensions
      this._winCheck = null;

      // bottom of sprite
      this._feet = null;

      // starting platform dimensions
      this._spd = null;
      
      // stickman class
      this._stickMan = stickMan;

      // boolean for game won
      this._gameWon = false;
   }

   // sets and gets ------------------------
   getWinPosition(){
      return this._winPlatX;
   }

   getWinPositionSize(){
      return this._winPlatW;
   }

   getGameWon(){
      return this._gameWon;
   }

   setGameWon(value){
      this._gameWon = value;
   }

   // removes objects from stage
   remove(object){
      this._stage.removeChild(this._startingPlatform);
      // this._stage.removeChild(this._platform1);
      this._stage.removeChild(this._platform1);
      this._stage.removeChild(this._platform2);
      this._stage.removeChild(this._winPlatform);
   }

   // removes sprite from stage and changes animation to prevent bugs
   removeSprite(){
      this._stickMan._sprite.gotoAndStop("walkRight");
      this._stage.removeChild(this._stickMan._sprite);
   }

   // collision checks with starting platform and winning platform
   collision(){
      // variable object holding win platform dimensions
      this._winCheck = this._winPlatform.graphics.command;
      
      // variable holding platform dimensions
      this._p1 = this._platform1.graphics.command;
      this._p2 = this._platform2.graphics.command;

      // gets sprite from stickman class
      this._sprite = this._stickMan.getSprite();

      // represents bottom of sprite
      this._feet = this._sprite.y + this._sprite.getBounds().height;

      // variable holding starting platform dimensions
      this._spd = this._startingPlatformDimensions;

      // check for sprite contact with STARTING PLATFORM
      if (this._feet > this._spd.y && this._feet < (this._spd.y + 20)){
         if(this._sprite.x >= this._spd.x && this._sprite.x < (this._spd.x + 45)){
            this._stickMan.setFalling(false);
         }
      }

      // check for sprite contact with WHITE PLATFORM
      if (this._feet > this._p1.y && this._feet < (this._p1.y + 20)){
         if(this._sprite.x >= this._p1.x && this._sprite.x < (this._p1.x + 100)){
            this._stickMan.setFalling(false);

         }
      }

      // check for sprite contact with BLUE PLATFORM
      if (this._feet >= this._p2.y && this._feet < (this._p2.y + 20)){
         if(this._sprite.x >= this._p2.x && this._sprite.x < (this._p2.x + 150)){
            this._stickMan.setFalling(false);
         }
      }

      // check if sprite is in winning position
      if (this._feet >= this._winCheck.y && this._feet < (this._winCheck.y + 20)){
         if(this._sprite.x >= this._winPlatX && this._sprite.x < (this._winPlatX + this._winPlatW)){
            this._stickMan.setFalling(false);
            
            // checks animation frame of sprite so the game doesnt end abruptly
            // sets appropiate booleans and plays game winning sounds
            if(this._stickMan._sprite.currentAnimation == 'jump' && this._stickMan._sprite.currentAnimationFrame == 13){
               this._gameWon = true;
               this._sounds.getFireworks();
               this._sounds.getApplause();
               this._stickMan._sprite.stop();
               this.removeSprite();
            }
         }
      }
   }

   // construct starting platform
   startingPlatform(){
      this._xpos = 100;
      this._ypos = 700;
      this._xwidth = 50;
      this._startingPlatform = new createjs.Shape();
      this._startingPlatform.graphics.beginFill("Green").drawRect(this._xpos, this._ypos,this._xwidth, this._yheight);
      this._stage.addChild(this._startingPlatform);
      this._startingPlatformDimensions = {
         x: this._xpos, 
         y: this._ypos,
         xwidth: this._xwidth, 
         yheight: this._yheight
      }
   }

   // construct intermediate platforms
   drawPlatforms(numOfPlatforms, stage){
      // this._platform1 = new createjs.Shape();
      // this._platform1.graphics.beginFill("purple").drawRect(100, 250, 100, 20);
      // stage.addChild(this._platform1);

      this._platform1 = new createjs.Shape();
      this._platform1.graphics.beginFill("white").drawRect(0, 350, 100, 20);
      stage.addChild(this._platform1);

      this._platform2 = new createjs.Shape();
      this._platform2.graphics.beginFill("DeepSkyBlue").drawRect(700, 550, 100, 20);
      stage.addChild(this._platform2);
   }

   // construct
   winningPlatform(stage){
      this._winPlatX = Math.random() * (700 - 100) + 100;
      this._winPlatW = Math.random() * (200 - 50) + 50;

      this._ypos = 150;

      this._winPlatform = new createjs.Shape();
      this._winPlatform.graphics.beginFill("red").drawRect(this._winPlatX, this._ypos,this._winPlatW, this._yheight);
      stage.addChild(this._winPlatform);
   }
}