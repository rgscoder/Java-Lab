const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  console.log(someVar)
  return someVar + " hi";
}
myFun();
let x = myFun()
console.log(x)