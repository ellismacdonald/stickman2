class Platform{
   constructor(stickMan, stage, sounds){
      this._sounds = sounds;
      this._xpos = null;
      this._ypos = null;
      this._xwidth = null;
      this._yheight = 20;
      this._stage = stage;

      this._platform1 = null;
      this._platform2 = null;
      this._platform3 = null;

      this._winPlatform = null;
      this._winPosition = null
      this._winPositionSize = null;

      this._winCheck = null;
      this._feet = null;
      this._spd = null;
      this._startPlatformExists = null;
      this._startingPlatform = null;
      this._startingPlatformDimensions = null;

      this._platformObj = null;
      this._platformLocation = [];
      
      this._stickMan = stickMan;
      this._gameWon = false;
   }

   getWinPosition(){
      return this._winPosition;
   }

   getWinPositionSize(){
      return this._winPositionSize;
   }

   getGameWon(){
      return this._gameWon;
   }

   setGameWon(value){
      this._gameWon = value;
   }

   remove(object){
      // this._stage.removeChild(object);
      this._stage.removeChild(this._startingPlatform);
      this._stage.removeChild(this._platform1);
      this._stage.removeChild(this._platform2);
      this._stage.removeChild(this._platform3);
      this._stage.removeChild(this._winPlatform);
   }

   removeSprite(){
      this._stickMan._sprite.gotoAndStop("walkRight");
      this._stage.removeChild(this._stickMan._sprite);
   }

   collision(){
      this._winCheck = this._winPlatform.graphics.command;
      this._sprite = this._stickMan.getSprite();

      this._feet = this._sprite.y + this._sprite.getBounds().height;

      this._spd = this._startingPlatformDimensions;
      let platformSize = this._winCheck.x + this._winPositionSize;

      if (this._startPlatformExists && this._feet >= this._spd.y && this._sprite.x >= this._spd.x && this._sprite.x < (this._spd.x + 45)){
         this._stickMan.setFalling(false);
      }

      if (this._feet <= this._winCheck.y && this._sprite.x >= this._winPosition && this._sprite.x <= (this._winPosition + this._winPositionSize)){
         this._stickMan.setFalling(false);
         
         if(this._stickMan._sprite.currentAnimation == 'jump' && this._stickMan._sprite.currentAnimationFrame == 13){
            this._gameWon = true;
            this._sounds.getFireworks();
            this._sounds.getApplause();
            this._stickMan._sprite.stop();
            this.removeSprite();
         }
         console.log('winner');
      }
   }

   startingPlatform(){
      this._xpos = 100;
      this._ypos = 700;
      this._xwidth = 50;
      this._startingPlatform = new createjs.Shape();
      this._startingPlatform.graphics.beginFill("Green").drawRect(this._xpos, this._ypos,this._xwidth, this._yheight);
      this._stage.addChild(this._startingPlatform);
      this._startPlatformExists = true;
      this._startingPlatformDimensions = {
         x: this._xpos, 
         y: this._ypos,
         xwidth: this._xwidth, 
         yheight: this._yheight
      }

   }

   drawPlatforms(numOfPlatforms, stage){
      this._platform1 = new createjs.Shape();
      this._platform1.graphics.beginFill("DeepSkyBlue").drawRect(100, 250, 100, 20);
      stage.addChild(this._platform1);

      this._platform2 = new createjs.Shape();
      this._platform2.graphics.beginFill("DeepSkyBlue").drawRect(50, 400, 100, 20);
      stage.addChild(this._platform2);

      this._platform3 = new createjs.Shape();
      this._platform3.graphics.beginFill("DeepSkyBlue").drawRect(700, 600, 100, 20);
      stage.addChild(this._platform3);
   }

   winningPlatform(stage){
      this._winPosition = Math.random() * (700 - 100) + 100;
      this._winPositionSize = Math.random() * (200 - 50) + 50;

      this._ypos = 150;

      this._winPlatform = new createjs.Shape();
      this._winPlatform.graphics.beginFill("red").drawRect(this._winPosition, this._ypos,this._winPositionSize, this._yheight);
      stage.addChild(this._winPlatform);
   }
}

// for(let i=0; i < numOfPlatforms; i++){
//    this._xpos = Math.random() * (700 - 100) + 100;
//    this._ypos = Math.random() * (800 - 100) + 100;
//    this._xwidth = Math.random() * (200 - 50) + 50;

//    this._platform = i.toString();
//    console.log(this._platform);
//    this._platform = new createjs.Shape();
//    this._platform.graphics.beginFill("DeepSkyBlue").drawRect(this._xpos, this._ypos,this._xwidth, this._yheight);
//    stage.addChild(this._platform);
//    this._platformObj = {
//       x: this._xpos,
//       y: this._ypos,
//       xw: this._xwidth,
//       yh: this._yheight
//    }
//    // console.log(this._platformObj);
//    this._platformLocation.push(this._platformObj);
// }

        // if (this._feet <= this._winCheck.y && (this._feet >= (this._winCheck.x) && this._feet <= (this._winCheck.x + this._winPositionSize))){
      //    this._stickMan.setFalling(false);
      //    this._gameWon = true;
      //    console.log('winner');
      // }
      // console.log(this._winPlatform);
      // console.log(this._winPosition);
      // console.log(this._winPlatform.graphics.command.h);
      // console.log('wincheck.x: ', this._winCheck.x)
      // console.log('wincheck.y: ', this._winCheck.y)
      // console.log('feet: ', this._feet)
      // console.log(this._sprite.x)

      // console.log(this._startingPlatform);
      // console.log(this._startingPlatformDimensions);
      // console.log(this._sprite.y);
      // console.log(this._sprite.x);

      // console.log('feet: ', this._feet);
      // console.log('winCheck.x: ', this._winCheck.x);
      
      // console.log(this._sprite);
      // console.log(this._feet);
            // this._winPosition = 100;
      // this._winPositionSize = Math.random() * (200 - 50) + 50;
      // this._winPositionSize = 50;