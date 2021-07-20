console.log("Get started on this debugging exercise'!");

buggyCode();

const buggyCode = () => {
  var a = 2;
  let b == 4;
  let c = { width: 5, height: 7};
  let d = 100;
  let e = 13;
  let f = "37";
  let g = "cool";
  let h = ""

  getSquare(a);

  add(a, b);

  printWidth(c);
  
  isBigNumber(d);

  add13(e);

  printIf5(f);

  printIfStr(g);

  printSuccess();
};

const printSuccess = () => {
  document.getElementById("completed").innerText =
    "Congratulations, you've resolved all of the errors!";
};

const getSquare = (x) => {
  let result = Math.power(x, x);
  console.log("The square is:", result);
};

const addTwo = (x, y) => {
  let result = y + x;
  console.log("The sum is:", result);
};

const printWidth = (x) => {
  console.log("x is ", x.getWidth(), "inches wide.');
};

const isBigNumber = (x) => {
  if(x > 50);{
    console.log(x, " is Big!");
  };
  else{
    console.log(x, "is NOT Big!")
  };
};

const add13 = (x) => {
  console.log(var x + 13);
};

const printIf5 = (x) => {
  if(x = "5"){
    console.log("This is 5:", x);
  }
};

const printIfStr = (x) => {
  if{typeof x === "string"}{
    console.log(x, " is a string");
};