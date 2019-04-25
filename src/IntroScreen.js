class IntroScreen {
   
   constructor(assetManager, stage) {
      this._screen = new createjs.Container();
      this._gameStarted = false;

      this._stage = stage;
      this._title = assetManager.getSprite("spritesheet");
      this._title.gotoAndStop("title");
      this._title.x = 320;
      this._title.y = 150;
      this._screen.addChild(this._title);

      this._play = assetManager.getSprite("spritesheet");
      this._play.gotoAndStop("playBtn");
      this._play.x = 330;
      this._play.y = 300;
      this._screen.addChild(this._play);
   }

   getGameStarted(){
      return this._gameStarted;
   }

   setGameStarted(value){
      this._gameStarted = value;
   }

   getPlayBtn(){
      return this._play;
   }

   hideMe(){
      this._stage.removeChild(this._screen);
      this._gameStarted = true;
   }

   showMe(){
      this._stage.addChild(this._screen);
   }
}