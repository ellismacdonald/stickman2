class Platform{
   constructor(){
      this._xpos = null;
      this._ypos = null;
      this._xwidth = null;
      this._yheight = 20;
      this._platform = null;
      this._number = null;
      this._winPlatform = null;
      this._winPosition = null
      this._winPositionSize = null;
   }

   getWinPosition(){
      return this._winPosition;
   }

   getWinPositionSize(){
      return this._winPositionSize;
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