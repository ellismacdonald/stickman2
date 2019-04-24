class Sounds{
   constructor(){
      this.sound = createjs.Sound;
   }

   getGrapple(stop){
      if(stop == 'stop'){
         this.sound.stop('grapple');
      } else{
         this.sound.play('grapple');
      }
   }

   getSwoosh(stop){
      if(stop == 'stop'){
         this.sound.stop('swoosh');
      } else{
         setTimeout(function(){createjs.Sound.play('swoosh')}, 500);
      }
   }

   getStartRound(){
      this.sound.play('startRound');
   }

   getYahoo(){
      this.sound.play('yahoo');
   }

   getFireworks(){
      this.sound.play('fireworks')
   }

   getApplause(){
      this.sound.play('applause');
   }
}