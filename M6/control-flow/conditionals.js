let moving = true;
let shouldBeMoving = true;
let doNothing = "Nothing to do here!";

if (moving === true) {
  if (shouldBeMoving === true) {
    console.log(doNothing);
  } else {
    console.log("Apply ductape");
  }
} else {
  if (shouldBeMoving === true) {
    console.log("Please apply WD-40");
  } else {
    console.log(doNothing);
  }
}
