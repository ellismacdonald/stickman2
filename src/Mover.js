// class Mover {
    
//     constructor(sprite, stage, myX, myY) {
//         // construct custom event object for object moving off stage
//         this._eventStageExit = new createjs.Event("stageExit", true);
//         // private property variables
//         this._speed = 2;
//         this._sprite = sprite;
//         this._direction = Mover.LEFT;
//         this._moving = false;
//         this._stage = stage;
//         this._jumping = false;
//         this._falling = false;
//         this._isSwinging = false;

//         // sprite.stop();
//     }
    
//     // --------------------------------------------------- get/set methods
//     set speed(value) {
//         this._speed = value;
//     }
//     get speed() {
//         return this._speed;
//     }
    
//     set direction(value) {
//         this._direction = value;
//     }
//     get direction() {
//         return this._direction;
//     }

//     get moving(){
//         return this._moving;   
//     }

//     get jumping(){
//         console.log(this._jumping);
//         return this._jumping;
//     }
    
//     // --------------------------------------------------- public methods
   

//     stopMe() {
//         this._sprite.stop();
//         this._moving = false;
//     }

//     setVelX(myVelocityX) {
//         velX = myVelocityX;
//     }

//     setVelY(myVelocityY){
//         this._velY = myVelocityY;
//     }

//     update() {
//         if (this._moving) {
//             // reference sprite object for cleaner code below
//             let sprite = this._sprite;
//             let gravity = this._gravity;
//             let jumping = this._jumping;
//             let falling = this._falling;
//             let velY = this._velY;
//             // get current width of sprite on this frame
//             // we only need to concern ourselves with width in terms of off stage since we rotate sprite up, down, left, and right
//             let width = sprite.getBounds().width;

//             if (this._direction == Mover.LEFT) {
//                 // moving left
//                 // console.log("sprite.x: " + sprite.x);
//                 // console.log("speed: " + this._speed)
//                 sprite.scaleX = -1;
//                 sprite.rotation = 0;
//                 sprite.x = sprite.x - 10;
//                 if (sprite.x < -width) {
//                     sprite.x = this._stage.canvas.width;
//                     sprite.dispatchEvent(this._eventStageExit);
//                 }

//             } else if (this._direction == Mover.RIGHT) {
//                 // moving right
//                 // console.log("right in mover");
//                 sprite.scaleX = 1;
//                 sprite.rotation = 0;
//                 sprite.x = sprite.x + 10;
//                 if (sprite.x > (this._stage.canvas.width + width)) {
//                     sprite.x = -width;
//                     sprite.dispatchEvent(this._eventStageExit);
//                 }

//             } else if (this._direction == Mover.SWING) {
//                 // console.log("direction moverswing");
//                 // sprite.play("swingRight");
//                 // sprite.scaleX = 1;
//                 // sprite.rotation = 0;
//                 // sprite.x = sprite.x + 10;
//                 // console.log(this._sprite.currentAnimation);
//                 if (sprite.x > (this._stage.canvas.width + width)) {
//                     sprite.x = -width;
//                     sprite.dispatchEvent(this._eventStageExit);
//                 }
//             }
            
//         }
//     }
// }

// // a better way to hack class constants - works because class is syntatical candy for a function
// Mover.LEFT = 1;
// Mover.RIGHT = 2;
// Mover.UP = 3;
// Mover.DOWN = 4;

//         // this._gravity = 0.0;
//         // this._velY = 0;
//         // this._velX = 0;
//         // this._myX = 0;
//         // this._myY = 0;
//         // sprite not animating on construction

// // else if (this._direction == Mover.JUMP) {
//             //     // moving right
//             //     console.log("jump in mover");
//             //     // console.log("mover: " + this._jumping);
//             //     // sprite.y += velY;

//             //     // if(jumping){
//             //     //     console.log("jumping");
//             //     //     // sprite.y = 800;
//             //     //     gravity -= 0.5;
//             //     //     this.setVelY(-gravity);            
//             //     //     if(gravity<=0.0){
//             //     //         jumping = false;
//             //     //         falling = true;
//             //     //     } 
//             //     // }
//             //     // if(falling){
//             //     //     console.log("falling");
//             //     //     // sprite.y = 1100;
//             //     //     gravity += 0.5;
//             //     //     this.setVelY(gravity);
//             //     //     if(sprite.y >= this._myY){
//             //     //         falling = false;
//             //     //     }
//             //     // }
//             //     sprite.scaleX = 1;
//             //     sprite.rotation = 0;
//             //     sprite.x = sprite.x + 10;
//             //     if (sprite.x > (this._stage.canvas.width + width)) {
//             //         sprite.x = -width;
//             //         sprite.dispatchEvent(this._eventStageExit);
//             //     }
//             // }