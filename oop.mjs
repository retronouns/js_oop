function log(obj){
    console.dir(obj, {showHidden: true, depth: null, colors: true})
}

//*** Root */

var Animal = function(sound) {
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

//*** Second Inheritor */

function Cat(name) {
    return Pet.call(this, name, 'meow')
}
Cat.prototype.__proto__ = Pet.prototype

//*** Third Inheritor */

function TortoiseShell(name) {
    const obj = new Cat(name)
    obj.breed = 'Tortie'
    obj.__proto__ = new.target.prototype
    return obj
}
TortoiseShell.prototype.__proto__ = Cat.prototype

//*** Fourth Inheritor */

class Olive extends TortoiseShell {
    constructor() {
        super('Olive')
    }
}

log(Animal)
log(Pet)
log(Cat)
log(TortoiseShell)
log(Olive)

const olive = new Olive
olive.speak()

log(olive instanceof Olive)
log(olive instanceof TortoiseShell)
log(olive instanceof Cat)
log(olive instanceof Pet)
log(olive instanceof Animal)

log(olive)