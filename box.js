class Box{
    constructor(x,y,width,height){
        this.body= Bodies.rectangle(x,y,width,height,{density:1.2,friction:2,restitution:0.8});
        this.w= width;
        this.h= height;
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        var ang= this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.w,this.h);
        pop();
    }
}