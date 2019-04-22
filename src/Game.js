(function() {

    // game variables
    let stage = null;
    let canvas = null;
    let introScreen = null;
    let circle = null;
    let ctx = null;
    // frame rate of game
    const FRAME_RATE = 24;
    const STICKMAN_MAX_SPEED = 5;

    let menuMusic;
    let gameMusic;
    // game objects
    let assetManager = null;
    let stickMan = null;
    let friend = null;
    let platform = null;
    let platformOne, platformTwo, platformThree, platformFour = null;
    let winPosition = null;
    let winPositionSize = null;
    // key booleans
    let keyJump = false;
    let keyLeft = false;
    let keyRight = false;
    let jumping = false;
    let isSwinging = false;
    let floor = 1052;
    let left = 1;
    let right = 2;
    let gameStarted = false;
    // ------------------------------------------------------------ private methods

    // ------------------------------------------------------------ event handlers
    function onKeyDown(e) {
        if (e.keyCode == 65) keyLeft = true;
        else if (e.keyCode == 68) keyRight = true;
        else if (e.keyCode == 32) keyJump = true; 
        createjs.Sound.play("keyDownSound");
    }

    function onKeyUp(e) {
        if (e.keyCode == 65) keyLeft = false;
        else if (e.keyCode == 68) keyRight = false;
        else if (e.keyCode == 32) keyJump = false;
        createjs.Sound.play("keyUpSound");
        stickMan.stopMe();
    }


    function onReady(e) {
        console.log(">> adding sprites to game");
        e.remove();
        
        introScreen = new IntroScreen(assetManager, stage);
        createjs.Sound.play("gameMusic");

        // contentScreen = new ContentScreen(assetManager, stage);
        introScreen.showMe();
        playBtn = introScreen.getPlayBtn();
        console.log(playBtn);
        playBtn.on("click", onPlay)
        // stage.update();
        // let platformTwo = new createjs.Shape();
        // platformTwo.graphics.beginFill("black").drawRect(300,700,100,20);
        createjs.Ticker.framerate = FRAME_RATE;
        createjs.Ticker.on("tick", onTick);

        // stage.addChild(platformTwo);

        

        console.log(">> game ready");
    }

    function onPlay(e){
        introScreen.hideMe();
        // stage.removeChild(title);
        stickMan = new StickMan(stage, assetManager);

        // introScreen = new IntroScreen(stage, assetManager, stickMan);

        stickMan.resetMe();

        platforms = new Platform(stickMan, stage);
        platforms.drawPlatforms(4, stage);
        platforms.winningPlatform(stage);
        platforms.startingPlatform(stage);
        winPosition = platforms.getWinPosition();
        winPositionSize = platforms.getWinPositionSize();
        console.log("winPosition: ", winPosition);

        friend = new Friend(stage, assetManager);
        friend.resetMe(winPosition, winPositionSize);
        // construct game object sprites
        // stage.on("mouseClick", mouseClick);
        // setup event listeners for keyboard keys
        document.onkeydown = onKeyDown;
        document.onkeyup = onKeyUp;
        document.onmousedown = mouseDown;
        document.onmouseup = mouseUp;

        // startup the ticker
        
    }

    function mouseDown(e){
        if(!stickMan.getDead()){
            isSwinging = true;
            if(e.button == 0){
                stickMan.swing(isSwinging, SwingState.LEFT);
            }else{
                stickMan.swing(isSwinging, SwingState.RIGHT);
            }
        }
        
    }

    function mouseUp(e){
        if(!stickMan.getDead()){
            isSwinging = false;
            falling = true;
            // stickMan.falling();
            stickMan.swing(isSwinging, SwingState.FALLING);
        }
        
    }

    function monitorKeys(assetManager) {
        if (!stickMan.killed) {
            if (keyLeft) {        
                isSwinging = false;
                stickMan.mover(StickMan.LEFT, jumping, isSwinging);
            } else if (keyRight) {
                isSwinging = false;
                stickMan.mover(StickMan.RIGHT, jumping, isSwinging);
            } else if (keyJump) {
                jumping = true;
                isSwinging = false;
                stickMan.mover(StickMan.JUMP, jumping, isSwinging);
            } 
        }
    }

    function onTick(e) {
        // TESTING FPS
        document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();
        if (introScreen.getGameStarted()){
            platforms.collision();
            // // game loop code here
            monitorKeys(assetManager);
            // // stickMan.applyPhysics();
            stickMan.updateMe();
        }
        // update the stage!
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

let SwingState = {
    LEFT: 1,
    RIGHT: 2,
    FALLING: 3
}