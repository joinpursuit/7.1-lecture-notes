const fixTheThing = (moving, shouldBeMoving) => {
  let doNothing = "Nothing to do here!";

  if (moving) {
    if (shouldBeMoving) {
      console.log(doNothing);
    } else {
      console.log("Apply ductape");
    }
  } else {
    if (shouldBeMoving) {
      console.log("Please apply WD-40");
    } else {
      console.log(doNothing);
    }
  }
};

fixTheThing(true, false);
fixTheThing(false, true);
