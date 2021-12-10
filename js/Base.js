class base {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.body.color = "red";
        World.add(world, this.body);
    }
    display(){
        this.pos = this.body.position;
        push();
        rectMode(CENTER)
        rect(this.x, this.y, this.width,this.height);
        fill("#8d6e63");
        translate(this.pos.x, this.pos.y);
        pop();
    }
}