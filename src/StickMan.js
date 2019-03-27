class StickMan {

   constructor(stage, assetManager, maxSpeed, myX, myY, floor) {
      this._speed = 10;
      this._velocity = 0;
      this._jumpPower = 20;
      this._jumping = false;
      this._friction = 0.8;
      this._left = null;
      this._right = true;
      this._momentum = 0;
      this._falling = false;
      this._state = 0
      this._stage = stage;
      this._sprite = assetManager.getSprite("spritesheet");
      stage.addChild(this._sprite);
      // this._stage = stage;
      // this._sprite = assetManager.getSprite("spritesheet");
      // stage.addChild(this._sprite);
      // this._isJumping = false;
      // this._wasJumping = false;
      // this._isSwinging = false;
      // this._isOnGround = true;
      // this._isAlive = true;
      // this._jumpTime = 0.0;
      // this._maxJumpTime = 0.35;
      // this._hasReachedExit = false;
   }

   getSprite(){
      return this._sprite;
   }

   resetMe() {
      this._sprite.gotoAndStop("walkRight");
      this._sprite.x = 100;
      // this._sprite.y = this._stage.canvas.height - this._sprite.getBounds().height + 100;
      // this._sprite.mover.speed = this._maxSpeed;
      this._sprite.y = this._stage.canvas.height - this._sprite.getBounds().height - 200
   }

   stopMe() {
      this._sprite.stop();
      this._moving = false;
   }

   updateMe() {
      console.log(this._sprite.y+ this._sprite.getBounds().height)
      if(this._sprite.y + this._sprite.getBounds().height == 800){
         this._sprite.gotoAndPlay("death");
         this._sprite.y = this._stage.canvas.height - this._sprite.getBounds().height;
         this._falling = false;
         this._stage.update();
      }

      if(!this._isSwinging){
         if (this._velocity < 0) {
            this._velocity++;
         }
         else {
            this._velocity += 10 ;
         }

         this._sprite.y += this._velocity;
         // if(this._falling) {
         //    console.log("falling");
         //    this._sprite.x = this._sprite.x +
         // };
         
         if (this._sprite.y + this._sprite.getBounds().height >= this._stage.canvas.height) {
            this._sprite.y = this._stage.canvas.height - this._sprite.getBounds().height;
         }
      
         
         // reset jumping/falling
         this._falling = false;
         this._jumping = false;
         this._velocity = 0;
         }
      }
   

   get speed() {
      return this._sprite.mover.speed;        
   } 

   mover(direction, jumping, swing) {
      this._sprite.play();
      this._moving = true;
      this._jumping = jumping;
      this._isSwinging = swing;

      let width = this._sprite.getBounds().width;
      
      // if(this._isSwinging == true){
      //    // console.log('is swinging');
      //    this._sprite.gotoAndStop("swingRight");
         
      //    // this._sprite.rotation = 0;
         
      //    // if (this._sprite.x < -width) {
      //    //    this._sprite.x = this._stage.canvas.width;
      //    //    this._sprite.dispatchEvent(this._eventStageExit);
      //    // }
      // }
      if (this._moving) {
            let sprite = this._sprite;
            let gravity = this._gravity;
            let jumping = this._jumping;
            let falling = this._falling;
            let velY = this._velY;
            let width = sprite.getBounds().width;

            if (direction == StickMan.LEFT) {
               this._left = true;
               this._right = false;
               sprite.scaleX = -1;
               sprite.rotation = 0;
               sprite.x = sprite.x - 10;
               if (sprite.x < -width) {
                  sprite.x = this._stage.canvas.width;
                  sprite.dispatchEvent(this._eventStageExit);
               }

            } else if (direction == StickMan.RIGHT) {
               this._right = true;
               this._left = false;
               sprite.scaleX = 1;
               sprite.rotation = 0;
               sprite.x = sprite.x + 10;
               if (sprite.x > (this._stage.canvas.width + width)) {
                  sprite.x = -width;
                  sprite.dispatchEvent(this._eventStageExit);
               }

            } else if (direction == StickMan.JUMP) {
               this._isJumping = true;
               this.jump();
            }
            
      }
   }

   walking(){
      console.log("walking");
      this._sprite.gotoAndPlay("walkRight");
   }

   swing(isSwinging, direction){
      console.log("swinging")
      
      // console.log("Swinging? :", isSwinging, "and the direction: ",direction)
      this._isSwinging = isSwinging;
      if (this._velocity < 0) {
         this._velocity++;
      }
      else {
         // fall slower than you jump
         this._velocity += 1.5;
      }
      // apply final velocity value v
      this._sprite.x += this._velocity;
   
      if (isSwinging == true && direction == SwingState.LEFT){
         // console.log("swinging left");
         this._sprite.scaleX = -1;
         this._sprite.gotoAndPlay("swingRight");
         this._left = true;
         this._right = false
      } else if ( isSwinging == true && direction == SwingState.RIGHT) {
         this._sprite.gotoAndPlay("swingRight");
         this._right = true;
         this._left = false;
         // console.log("swinging right");
         this._sprite.scaleX = 1;
      }
         if(this._right){
            // console.log("swing right")
            this._sprite.x = this._sprite.x + (this._sprite.currentAnimationFrame * 8) + this._velocity;
            this._sprite.y = this._sprite.y - (this._sprite.currentAnimationFrame * 2);
            this._momentum = this._sprite.currentAnimationFrame
         } 
         if(this._left){
            // console.log("swing left");
            this._sprite.x = this._sprite.x - (this._sprite.currentAnimationFrame * 8);
            this._sprite.y = this._sprite.y - (this._sprite.currentAnimationFrame * 2);

         }
      
      if(!isSwinging){
      //    console.log("this._sprite.y: ",this._sprite.y);
      // console.log("this._sprite.getBounds().height: ",this._sprite.getBounds().height);
      // console.log("this._stage.canvas.height: ",this._stage.canvas.height);
         // console.log("not swinging");
         this._sprite.gotoAndPlay("jump");
         this._falling = true;
         console.log("this._sprite.y: ",this._sprite.y);
         console.log("this._sprite.getBounds : ",this._sprite.getBounds().height);
         console.log("this.canvasheight : ",this._stage.canvas.height);
         if (this._sprite.y - this._sprite.getBounds().height >= this._stage.canvas.height) {
            // console.log("bottom");
            this._sprite.gotoAndPlay("death");
         }
      }
   }
   
   // falling(falling){
   //    if(falling){
   //       console.log("he fell")
   //    }
   // }

//    

   jump() {
      console.log("we be jumping");
      this._sprite.gotoAndPlay("jump");
      // this._sprite.y = 100;
      this._velocity = this._jumpPower*-1;
      this._jumping = true;
   }

   falling(){
      // this._sprite.gotoAndPlay("falling");
      // if(this._right){
      //    console.log("swing right")
      //    this._sprite.x = this._sprite.x + (this._momentum * 8) + this._velocity;
         
      // } 
      // if(this._left){
      //    this._sprite.x = this._sprite.x - (this._sprite.currentAnimationFrame * 8);
         

      // }
   }

   // swingMe(direction){
   //    console.log("direction", direction);
   //    if(direction === SwingState.LEFT){
   //       this._sprite.scaleX = -1;
   //    } else {
   //       this._sprite.ScaleX = 1;
   //    }
   //    this._sprite.gotoAndPlay("swingRight");
   // }
}

// let SwingState = {
//    LEFT: 1,
//    RIGHT: 2
// }

SwingState.LEFT = 1;
SwingState.RIGHT = 2;
SwingState.FALLING = 3

StickMan.LEFT = 1;
StickMan.RIGHT = 2;
// Mover.UP = 3;
// Mover.DOWN = 4;

