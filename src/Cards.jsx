import React, { useState } from "react";
import { Card, CardImg } from "react-bootstrap";
import Detail from "./Detail";

const Cards = (props) => {
  const [isClicked, setisClicked] = useState(false);

  const [detail, setdetail] = useState();
  return (
    <>
      <Card className="col-md-5 col-12">
        <CardImg
          variant="top"
          src={props.img}
          height="400px"
          width="200px"
          onClick={() => {
            setisClicked(!isClicked);
            setdetail(props.name);
          }}
        />
        <div>
          <h3>{props.name}</h3>
        </div>
      </Card>
      <Detail name={detail} c={isClicked} />
    </>
  );
};

export default Cards;
