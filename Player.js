class Player{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.spt=createSprite(this.x,this.y,50,50);
        this.spt.shapeColor="orange"
        this.spt.addAnimation("player",playerAnimation);
    }
    
    move(xdir,ydir)
    {
        this.spt.x+=xdir*grid;
        this.spt.y+=ydir*grid;
    }
    if(carGroup1.isTouching(this.spt)){
        this.spt.x = width/2;
        this.spt.y = height-75;
    }
    if(logGroup1.isTouching(this.spt)){
        this.spt.x= player.spt.x-3;
    }
    else if((this.spt.y>height-1550 && this.spt.y < height-1300)||
    (this.spt.y < height-500 && this.spt.y > height-850 )||
    (this.spt.y>height)||
    (this.spt.x<0)||
    (this.spt.x>width)){
    
        this.spt.x = width/2;
        this.spt.y = height-75;
    
}
}