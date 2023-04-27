let sprites = {};
let assetsStilloading = 0;


function assetsLoadingLoop(callback){

    if(assetsStilloading){
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
    }
    else{
        callback();

    }

}

function loadAssets(callback){

    function loadSprite(fileName){
        assetsStilloading++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/sprites/" + fileName

        spriteImage.onload = function(){
           assetsStilloading--; 
        }
        
        return spriteImage;
    }
    sprites.background = loadSprite('spr_background.png');

    sprites.stick = loadSprite('spr_stick.png');

    assetsLoadingLoop(callback);
}
