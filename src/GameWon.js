class GameWon {
   
   constructor(stage) {
      // let eventScreenComplete = new createjs.Event("introFinished");
      this._screen = new createjs.Container();
      this._gameWon = null;
      this._stage = stage;

      this._title = new createjs.Text();
      this._title.font = "bold 96px Dorsa";
      this._title.color = "white";
      this._title.text = "You Won!!";
      this._title.x = 100;
      this._title.y = 600;
      this._screen.addChild(this._title);

      
      // this._title = assetManager.getSprite("spritesheet");
      // this._title.gotoAndStop("title");
      // this._title.x = 320;
      // this._title.y = 150;
      // this._screen.addChild(this._title);

      // this._play = assetManager.getSprite("spritesheet");
      // this._play.gotoAndStop("playBtn");
      // this._play.x = 330;
      // this._play.y = 300;
      // this._screen.addChild(this._play);
   }

   // getGameStarted(){
   //    return this._gameStarted;
   // }

   // getPlayBtn(){
   //    return this._play;
   // }

   hideMe(){
      // console.log('hide me');
      // console.log(this._stage);
      // console.log(this._screen);
      this._stage.removeChild(this._screen);
      // this._gameStarted = true;
   }

   showMe(){
      this._stage.addChild(this._screen);
   }
}