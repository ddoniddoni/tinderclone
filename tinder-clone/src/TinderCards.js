import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Bill Gates",
      url: "http://www.usline.kr/news/photo/202004/15356_9300_490.jpg",
    },
    {
      name: "mark zuckerberg",
      url:
        "https://mblogthumb-phinf.pstatic.net/20150909_37/ahalinux_1441808513455dudnB_PNG/%B8%B6%C5%A9%C1%D6%C4%BF%B9%F6%B1%D7.PNG?type=w2",
    },
  ]);

  //   setPeople([...people, "ddoni", "park"]);

  return (
    <div>
      <h1>Tinder cards</h1>

      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
