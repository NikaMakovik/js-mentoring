// AC: 
// implement encapsulation

//encapsulation with closure
function Hedgehog () {
    let speed = 10000; // this is private
    this.name = 'Sonic';
    this.zoom = function () {
      // both name and speed are accessible from here
        console.log(`${this.name} zooms with the speed of ${speed} miles per second!`);
    }
}
const sonic = new Hedgehog();
sonic.zoom();
 
console.log(sonic.name) //valid value
console.log(sonic.speed) // undefined

//encapsulation with properties
let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
        this._name = 'Ian'
        console.log('u cant')
        // this._name = value;
    }
};
  
    user.name = "Pete";
    console.log(user.name);



// AC: 
// There is an object a with a set of properties, object b must inherit the properties of a
let a = {
    propertyA: true,
    propertyAAA: true
};
let b = {
    propertyB: true
};

b.__proto__ = a;
console.log(b.propertyA) //true

