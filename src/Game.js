(function() {

    // game variables
    let stage = null;
    let canvas = null;
    let ctx = null;

    // screens
    let introScreen = null;
    let gameOver = null;
    let gameWon = null;

    // frame rate of game
    const FRAME_RATE = 24;

    // game objects
    let assetManager = null;
    let stickMan = null;
    let friend = null;
    let winPosition = null;
    let winPositionSize = null;

    // swing checks
    let isSwinging = false;
    let swingLeft = false;
    let swingRight = false;

    function onReady(e) {
        console.log(">> adding sprites to game");
        e.remove();
        // construct classes
        introScreen = new IntroScreen(assetManager, stage);
        gameOver = new GameOver(stage);
        gameWon = new GameWon(stage);
        sounds = new Sounds();

        // show intro screen
        introScreen.showMe();
        playBtn = introScreen.getPlayBtn();
        playBtn.on("click", onPlay)

        // call ticker
        createjs.Ticker.framerate = FRAME_RATE;
        createjs.Ticker.on("tick", onTick);
        console.log(">> game ready");
    }

    // called when user clicks play
    function onPlay(e){
        sounds.getStartRound();
        introScreen.hideMe();
        
        // construct stickMan and add to canvas
        stickMan = new StickMan(stage, assetManager, sounds);
        stickMan.resetMe();

        // construct platforms and add to canvas
        platforms = new Platform(stickMan, stage, sounds);
        platforms.drawPlatforms(4, stage);
        platforms.winningPlatform(stage);
        platforms.startingPlatform(stage);
        winPosition = platforms.getWinPosition();
        winPositionSize = platforms.getWinPositionSize();

        // construct friend add to canvas
        friend = new Friend(stage, assetManager, stickMan);
        friend.resetMe(winPosition, winPositionSize);

        // event listeners for mouse clicks
        document.onmousedown = mouseDown;
        document.onmouseup = mouseUp; 
    }

    // called on mouse click
    function mouseDown(e){
        // if stickman is dead, mouseclick disabled, checks if game is started
        if(!stickMan.getDead() && introScreen.getGameStarted()){
            sounds.getGrapple();
            sounds.getSwoosh();
            isSwinging = true;
            
            // checks if user clicks button while still swinging in a direction, prevents sprite from
            // going to original position 
            // checks for right-click
            if(e.button == 0 ){
                if(swingRight){
                    return;
                } else {
                    swingLeft = true;
                    //calls swing function in stickman class
                    stickMan.swing(isSwinging, SwingState.LEFT);
                }
            }

            // checks for left click
            if(e.button == 2){
                if(swingLeft){
                    return;
                } else {
                    swingRight = true
                    stickMan.swing(isSwinging, SwingState.RIGHT);
                }
            }
        }
    }

    // on mouseup, sounds playing are stopped in mid swing
    // sets booleans appropriately
    // sets state of stickman to falling
    function mouseUp(e){
        if(!stickMan.getDead()){
            sounds.getGrapple('stop');
            sounds.getSwoosh('stop');
            isSwinging = false;
            swingRight = false;
            swingLeft = false;
            stickMan.swing(isSwinging, SwingState.FALLING);
        }
    }

    // remove objects from game when called on game win or game over
    function remove(){
        stickMan.remove();
        platforms.remove();
        friend.remove();
    }

    // shows intro screen after game win or lose
    function playAgain(){
        stickMan.setDead(false);
        introScreen.showMe();
    }

    function onTick(e) {
        // TESTING FPS
        document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

        // checks if game is started
        if (introScreen.getGameStarted()){
            // prevents sprite animation from going further then intended which can cause a bug
            if(stickMan._sprite.currentAnimationFrame >= 41){
                stickMan._sprite.gotoAndPlay("jump");
                stickMan.setSwinging(false);
                stickMan.setFalling(true);
                if(swingRight){
                    stickMan._sprite.x = stickMan._sprite.x + (stickMan._sprite.currentFrame * 4);
                    stickMan._sprite.y = stickMan._sprite.y - (stickMan._sprite.currentFrame * 2);
                } else {
                    stickMan._sprite.x = stickMan._sprite.x - (stickMan._sprite.currentFrame * 4);
                    stickMan._sprite.y = stickMan._sprite.y - (stickMan._sprite.currentFrame * 2);
                }
            }

            // checks sprite collision with platforms
            platforms.collision();

            // checks if game is over, sets appropriate booleans
            if(stickMan.getGameOver()){
                stickMan.setDead(false);
                stickMan.setGameOver(false);
                introScreen.setGameStarted(false);
                // removes game objects
                remove();
                //displays gameover screen
                gameOver.showMe();
                // hides gameover screen after 3 seconds
                setTimeout(function(){gameOver.hideMe()}, 3000)
                //calls playagain function which displays introscreen after 3 seconds
                setTimeout(function(){playAgain()}, 3000);
            }

            // checks if game is won, sets appropriate booleans
            if(platforms.getGameWon()){
                platforms.setGameWon(false);
                introScreen.setGameStarted(false);
                remove();
                gameWon.showMe();
                setTimeout(function(){gameWon.hideMe()}, 2000)
                setTimeout(function(){playAgain()}, 2000);
            }
            // updates state of stickman
            stickMan.updateMe();
        }
        // stage update
        stage.update();
    }

    // ---------------------------------------------------------- main method
    function main() {
        console.log(">> initializing");
        // get reference to canvas
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext('2d');
        // set canvas to as wide/high as the browser window
        canvas.width = 800;
        canvas.height = 800;
        // create stage object
        stage = new createjs.StageGL(canvas);
        stage.setClearColor("#CCCCCC");
        // draw();
        
        // construct preloader object to load spritesheet and sound assets
        assetManager = new AssetManager(stage);
        stage.on("allAssetsLoaded", onReady);
        // load the assets
        assetManager.loadAssets(manifest);
        // displayObject.addEventListener("click", handleClick);
        document.addEventListener('contextmenu', event => event.preventDefault());
        document.addEventListener('mouseClick', event => event.preventDefault());
    }
    main();
})();

// swing state constants
let SwingState = {
    LEFT: 1,
    RIGHT: 2,
    FALLING: 3
}