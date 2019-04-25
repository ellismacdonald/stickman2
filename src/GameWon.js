class GameWon {
   
   constructor(stage) {
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
   }

   hideMe(){
      this._stage.removeChild(this._screen);
   }

   showMe(){
      this._stage.addChild(this._screen);
   }
}