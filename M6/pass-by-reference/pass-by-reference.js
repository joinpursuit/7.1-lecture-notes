//////////////////////////////*  *//////////////////////////
//////////////////////* Pass by Value */////////////////////
//////////////////////////////*  *//////////////////////////

const addTwo = (num) => {
  num = num + 2;
  console.log(num);
};

let a = 3;

// which value of `a` will be printed?
// console.log(a);
// which value of `a` will be printed?
// addTwo(a);
// which value of `a` will be printed?
// console.log(a);

//////////////////////////////*  *//////////////////////////////
//////////////////////* Pass by Reference */////////////////////
//////////////////////////////*  *//////////////////////////////

const updateDogName = (dog) => {
  dog.name = "rover";
  console.log(dog.name);

  dog = {
    name: "gopher",
    age: 13,
  };
};

let b = {
  name: "doggy",
  age: 5,
};

// which dog name will be printed?
// console.log(b.name);
// which dog name will be printed?
// updateDogName(b);
// which dog name will be printed?
// console.log(b.name);
