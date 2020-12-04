class Box{
    constructor(x,y,width,height){

        var options={
            restitution:0.8
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        fill(255);
        push(); // save the setting
        translate(pos.x,pos.y) //takes the position of the body
        rotate(angle) //takes the body's angle
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop(); //restores the setting
        
    }
}