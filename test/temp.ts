function readonly(target, name, descriptor) {
  console.log(target, name, descriptor);
  // {} say {
  //   value: [Function: say],
  //   writable: true,
  //   enumerable: false,
  //   configurable: true
  // }
  descriptor.writable = false;
  return descriptor;
}
class Cat {
  @readonly
  say() {
    console.log('meow ~');
  }
}
const kitty = new Cat();
kitty.say = function () {
  console.log('woof !');
};
kitty.say(); // meow ~
console.log(kitty); // Cat {}
