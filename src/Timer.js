class Timer{
   constructor(stage){
      this._stage = stage;
      this._screen = new createjs.Container();

      this._title = new createjs.Text();
      this._title.font = "bold 75px Dorsa";
      this._title.color = "red";
      this._title.text = 30;
      this._title.x = 600;
      this._title.y = 25;
      this._screen.addChild(this._title);
   }

   showMe(){
      this._stage.addChild(this._screen);
   }

   countDown(){
      this._title.text = this._title.text - .02;
   }
}

// function counter(ctx, num) {
//    console.log('anything');
//    ctx.clearRect(0,0,canvas.width,canvas.height);
//    ctx.font="75px Comic Sans MS";
//    ctx.fillStyle = "red";
//    ctx.y = 100;
//    ctx.x = 100;
//    ctx.fillText(""+num, canvas.width/2, canvas.height/2);
//    if(num == 0){
//        clearInterval(intvl);
//    }
//    stage.addChild(ctx);
// } 

// Resize canvas on resize of window
// window.addEventListener('resize', function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }, false); 

// var canvas = document.getElementById("myCanvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// var ctx=canvas.getContext("2d");
// var num = 10;
//Start Countdown Timer
// var intvl = setInterval(function(){counter(ctx,num--);},1000);