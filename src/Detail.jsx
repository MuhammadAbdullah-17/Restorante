import React from "react";
import { Card } from "react-bootstrap";
import { dishes } from "./Data";

const Detail = (props) => {
  return (
    <div
      className="detail row align-items-center"
      style={props.c ? { display: "block" } : { display: "none" }}
    >
      <div className="">
        {dishes.map((data) => {
          if (props.name === data.name)
            return (
              <>
                <div className="row">
                  <div className="col-md-5 col-12  ">
                    <Card>
                      <Card.Img variant="top" src={data.image} />
                      <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-5 col-12 ">
                    <Card>
                      <Card.Body>
                        <Card.Title>Comments</Card.Title>

                        {dishes.map((data, i) => {
                          return (
                            <>
                              <Card.Text>{data.comments[i].comment}</Card.Text>
                              <Card.Text>
                                ---{data.comments[i].author},
                                {data.comments[i].date}
                              </Card.Text>
                            </>
                          );
                        })}
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </>
            );
        })}
      </div>
    </div>
  );
};

export default Detail;
