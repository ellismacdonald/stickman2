(function() {

    // game variables
    let stage = null;
    let canvas = null;
    let introScreen = null;
    let gameOver = null;
    let gameWon = null;
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

    // let stickManCheck = null;

    let floor = 1052;
    let left = 1;
    let right = 2;
    let gameStarted = false;
    // ------------------------------------------------------------ private methods

    // ------------------------------------------------------------ event handlers

    function playAgain(){
        stickMan.setDead(false);
        introScreen.showMe();
    }


    function onReady(e) {
        console.log(">> adding sprites to game");
        e.remove();
        introScreen = new IntroScreen(assetManager, stage);
        gameOver = new GameOver(stage);
        gameWon = new GameWon(stage);
        sounds = new Sounds();
        // createjs.Sound.play("gameMusic");

        introScreen.showMe();
        playBtn = introScreen.getPlayBtn();
        playBtn.on("click", onPlay)
        createjs.Ticker.framerate = FRAME_RATE;
        createjs.Ticker.on("tick", onTick);
        console.log(">> game ready");
    }

    function onPlay(e){
        sounds.getStartRound();
        introScreen.hideMe();
        
        stickMan = new StickMan(stage, assetManager, sounds);
        // stickManCheck = stickMan.getSprite();

        stickMan.resetMe();

        platforms = new Platform(stickMan, stage, sounds);
        platforms.drawPlatforms(4, stage);
        platforms.winningPlatform(stage);
        platforms.startingPlatform(stage);
        winPosition = platforms.getWinPosition();
        winPositionSize = platforms.getWinPositionSize();

        friend = new Friend(stage, assetManager, stickMan);
        friend.resetMe(winPosition, winPositionSize);

        document.onmousedown = mouseDown;
        document.onmouseup = mouseUp;
        
    }

    function mouseDown(e){
        if(!stickMan.getDead() && introScreen.getGameStarted()){
            sounds.getGrapple();
            sounds.getSwoosh();
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
            sounds.getGrapple('stop');
            sounds.getSwoosh('stop');
            isSwinging = false;
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

    function remove(){
        stickMan.remove();
        platforms.remove();
        friend.remove();
    }

    function onTick(e) {
        // TESTING FPS
        document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();
        if (introScreen.getGameStarted()){
            platforms.collision();
            // friend.update();
            monitorKeys(assetManager);

            if(stickMan.getGameOver()){
                stickMan.setDead(false);
                stickMan.setGameOver(false);
                introScreen.setGameStarted(false);
                remove();
                gameOver.showMe();
                setTimeout(function(){gameOver.hideMe()}, 3000)
                setTimeout(function(){playAgain()}, 3000);
            }

            if(platforms.getGameWon()){
                platforms.setGameWon(false);
                introScreen.setGameStarted(false);
                remove();
                gameWon.showMe();
                setTimeout(function(){gameWon.hideMe()}, 2000)
                setTimeout(function(){playAgain()}, 2000);
            }
            stickMan.updateMe();
        }
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