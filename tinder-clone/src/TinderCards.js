import React, { useState } from "react";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  setPeople([...people, "ddoni", "park"]);

  return (
    <div>
      <h1>Tinder cards</h1>
    </div>
  );
};

export default TinderCards;
