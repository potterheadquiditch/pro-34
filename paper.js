class paper{
    constructor(x,y,radius){
         var options={
            restitution:1.1, 
            friction:2, 
            density:3
              //restitution:0.3, 
              //friction:0.5, 
              //density:1.2 
           } 
           this.body=Bodies.circle(x,y,radius,options);
            this.x=x; 
            this.y=y;
            this.radius=radius;
             World.add(world, this.body);
            } display(){
                var pos=this.body.position;
                push(); 
                fill(28,24,24);
                translate(pos.x, pos.y);
                ellipseMode(RADIUS); 
                ellipse(0,0,this.radius, this.radius);
                pop();
               } 
           }