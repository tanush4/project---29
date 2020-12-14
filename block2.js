class Block2  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)

    }
    display()  {
        rectMode(CENTER)
        fill("purple")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
}