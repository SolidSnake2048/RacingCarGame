class GameEnd{
    constructor(){
        this.logoImage="https://img.freepik.com/vector-gratis/fondo-game-over-distorision_23-2148087864.jpg?size=338&ext=jpg";
        this.logo=createImg(this.logoImage);
        this.final = createElement('h2');
    }
    hide(){

    }
    display(){
        this.final.html("Place: "+player.rank);
        this.final.position(displayWidth/2-50,height/2-100);
        this.logo.position(width/2.4,10);
    }
}