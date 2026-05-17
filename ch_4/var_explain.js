// VAR

var x = 10; //global scope- available everywhere


// function scoped
function test() {
  console.log("hi");
  var x = 20; //local scope- available inside the function only
  console.log('inside function: ' + x);

  if (true) {
    var x = 30; //var is function scoped, it will overwrite the previous value of x in the function
    console.log('inside if-block: ' + x);
  }

  console.log('after if-block, inside function: ' + x); // 30, x in the if-block is same as the x in the function
}

test();

console.log('outside function: ' + x);

// hi will not print untill we call it
// local scope-will be available inside the function only
// var value can change everytime
// var will take the latest value(update the value) of the x in the function and print it inspite of it being outside the block


