class Platform{
   constructor(stickMan, stage){
      this._xpos = null;
      this._ypos = null;
      this._xwidth = null;
      this._yheight = 20;
      this._stage = stage;
      this._platform = null;
      this._winPlatform = null;
      this._winPosition = null
      this._winPositionSize = null;

      this._feet = null;
      this._spd = null;
      this._startPlatformExists = null;
      this._startingPlatform = null;
      this._startingPlatformDimensions = null;

      this._platformObj = null;
      this._platformList = [];
      
      this._stickMan = stickMan;
   }

   getWinPosition(){
      return this._winPosition;
   }

   getWinPositionSize(){
      return this._winPositionSize;
   }

   remove(object){
      this._stage.removeChild(object);
   }

   collision(){
      this._sprite = this._stickMan.getSprite();

      this._feet = this._sprite.y + this._sprite.getBounds().height
      this._spd = this._startingPlatformDimensions;
      
      console.log(this._startingPlatform);
      console.log(this._startingPlatformDimensions);
      console.log(this._sprite.y);
      console.log(this._sprite.x);

      if (this._startPlatformExists && this._feet >= this._spd.y && this._sprite.x >= this._spd.x && this._sprite.x < (this._spd.x + 65)){
         this._stickMan.setFalling(false);
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
      // let i = numOfPlatforms;
      for(let i=0; i < numOfPlatforms; i++){
         this._xpos = Math.random() * (700 - 100) + 100;
         this._ypos = Math.random() * (800 - 100) + 100;
         this._xwidth = Math.random() * (200 - 50) + 50;
         
         this._platform = this._platform + i.toString();
         this._platform = new createjs.Shape();
         this._platform.graphics.beginFill("DeepSkyBlue").drawRect(this._xpos, this._ypos,this._xwidth, this._yheight);
         stage.addChild(this._platform);
         this._platformObj = {
            x: this._xpos,
            y: this._ypos,
            xw: this._xwidth,
            yh: this._yheight
         }
         console.log(this._platformObj);
         this._platformList.push(this._platformObj);
      }
   }

   winningPlatform(stage){
      this._winPosition = Math.random() * (700 - 100) + 100;
      this._ypos = 100;
      this._winPositionSize = Math.random() * (200 - 50) + 50;
      this._winPlatform = new createjs.Shape();
      this._winPlatform.graphics.beginFill("red").drawRect(this._winPosition, this._ypos,this._winPositionSize, this._yheight);
      stage.addChild(this._winPlatform);
   }
}