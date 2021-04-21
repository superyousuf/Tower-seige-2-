class Hex {

    constructor(x,y,width,height) {
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("hexagon (1).png");
        World.add(world,this.body);
    }

    display() {

     super.display();
    }
}
