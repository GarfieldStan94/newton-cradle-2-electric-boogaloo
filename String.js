class String{
    constructor(body1,pointB)
	{
		
		var options={
			bodyA:body1,
			
			pointB:pointB,
			stiffness: 1,
      		angularStiffness: 1,
      		length: 220
		}
		//console.log(options);
		this.rope=Constraint.create(options);
		this.pointB= pointB;
		World.add(world,this.rope)
    }
    

    display(){
        var pointA= this.rope.bodyA.position;
       	var pointB= this.pointB;

        strokeWeight(2);
        
        stroke("white");
		line(pointA.x, pointA.y,pointB.x,pointB.y);

    }



}