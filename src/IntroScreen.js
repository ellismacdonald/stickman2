class IntroScreen {
   
   constructor(stage, assetManager) {
      console.log(assetManager);
      this._stage = stage;
      // this._maxSpeed = maxSpeed;
      this._sprite = assetManager.getSprite("spritesheet");
      this._sprite.gotoAndStop("title");
      this._sprite.x = 320;
      this._sprite.y = 150;
      this._stage.addChild(this._sprite);

      this._play = assetManager.getSprite("spritesheet");
      this._play.gotoAndStop("play");
      this._play.x = 330;
      this._play.y = 300;
      this._stage.addChild(this._play);

   }

   onPlay(e){
      console.log("play");

      // stage.dispatchEvent(eventScreenComplete);
      stage.removeChild(playBtn);
      stage.removeChild(title);
      // stage.addChild(stickMan);

   }
   
   // showMe(){
   //    console.log("sdf")
   

   // let title = this._sprite;
   // title.x = 320;
   // title.y = 150;
   // title.gotoAndPlay("title");
   // this._stage.addChild(title);

   // let playBtn = this._sprite;
   // playBtn.x = 330;
   // playBtn.y = 300;
   // playBtn.gotoAndPlay("play");
   // this._screen.addChild(playBtn);

   // // playBtn.on("click", onPlay());
   // }
   // hideMe(){
   //    console.log("intro hide me");
   //    stage.removeChild(screen);
   // }

   // // showMe(){
   // //    this._stage.addChild(title);
   // //    this._stage.addChild(playBtn);
   // // }

   
}