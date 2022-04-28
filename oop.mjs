function log(obj){
    console.dir(obj, {showHidden: true, depth: null, colors: true})
}

//*** Root */

function Animal(sound) {
    this.sound = sound
    this.speak = () => {
        console.log(this.sound)
    }
}

//*** First Inheritor */

const Pet = function(name, sound){
    Object.assign(this, new Animal(sound))
    this.name = name
}
Pet.prototype.__proto__ = Animal.prototype
Pet.__proto__ = Animal

//*** Second Inheritor */

function Cat(name) {
    const obj = new Pet(name, 'meow')
    obj.__proto__ = new.target.prototype
    return obj
}
Cat.prototype.__proto__ = Pet.prototype
Cat.prototype.constructor = Cat

//*** Third Inheritor */

class TortoiseShell extends Cat {
    constructor(name){
        super(name)
        this.breed = 'Tortie'
    }
}



log(Animal)
log(Pet)
log(Cat)
log(TortoiseShell)

const tortoiseShell = new TortoiseShell("Olive")
log(tortoiseShell)
tortoiseShell.speak()
log(tortoiseShell instanceof TortoiseShell)
log(tortoiseShell instanceof Cat)
log(tortoiseShell instanceof Pet)
log(tortoiseShell instanceof Animal)