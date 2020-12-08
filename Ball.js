class Ball{
    constructor(x,y,radius){
        var options = {
            friction:0,
            density:0.8,
            restitution : 1

        }
        this.radius= radius;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        



    }

    display(){
        var pos= this.body.position;

        push();
        fill("orange");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }




}