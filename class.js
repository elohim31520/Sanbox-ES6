

class vehicle{
    constructor(name,speed,br){
        this.name = name
        this.speed = speed
        this.bearers = br
    }
    fullThrottle(){
        return this.speed * 1.5 
    }
    brake(){
        this.speed = 0
        console.log(`${this.name}減速速為0`)
    }
    turn(deg){
        console.log(`轉向${deg}度`)
    }
}

// arg傳進super()
class plane extends vehicle{
    constructor(name,speed,br){
        super(name,speed,br)
        this.wing = 2
        this.wingWidth = 70
    }
}

let car = new vehicle('Mercedes',180,4)

car.brake()

let F16 = new plane('F16',1200,2)
F16.brake()

console.log("vehicle的屬性有: ",Object.getOwnPropertyNames(vehicle.prototype)) //[ 'constructor', 'fullThrottle', 'brake', 'turn' ]
console.log("vehicle的屬性有: ",Object.getOwnPropertyNames(vehicle)) //[ 'length', 'prototype', 'name' ]