import React from "react";
import { Switch, Route } from "react-router-dom";
import CatRandom from "./CatRandom";
import CatRandomNum from "./CatRandomNum";

const renderCatRandomNum = (props) => {
  console.log(props);
  return <CatRandomNum num={props.match.params.num} />;
};

const Cats = () => {
  return (
    <div>
      CATS COMPONENT
      <Switch>
        <Route exact path="/cat/random" render={() => <CatRandom />} />
        <Route path="/cat/random/:num" component={CatRandomNum} />
      </Switch>
    </div>
  );
};

export default Cats;
