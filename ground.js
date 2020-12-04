class ground{
    constructor(x,y,width,height){
      var options={
          isStatic:true

      } 
      this.body= Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);

    }
    display(){
        var groundPos= this.body.position;
        fill(255);
        rectMode(CENTER);
        rect(groundPos.x,groundPos.y,this.width,this.height);

    }
}