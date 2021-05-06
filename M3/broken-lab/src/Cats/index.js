import React from "react";
import { Switch, Route } from "react-router-dom";
import CatRandom from "./CatRandom";
import CatRandomNum from "./CatRandomNum";

const renderCatRandomNum = (props) => {
  return <CatRandomNum numCats={props.params.num} />;
};

const Cats = () => {
  return (
    <div>
      CATS COMPONENT
      <Switch>
        <Route path="/cat/random" render={CatRandom} />
        <Route path="/cat/random/:num" render={renderCatRandomNum} />
      </Switch>
    </div>
  );
};

export default Cats;
