import React from "react";
import { Breadcrumb, Card } from "react-bootstrap";




const RenderCard=({ item })=> {
  return (
    <>
      <Card>
        <Card.Img src={item.image} height="280px" alt={item.name} />

        <Card.Body>
          <Card.Title> {item.name} </Card.Title>

          {item.designation ? (
            <Card.Subtitle>{item.designation}</Card.Subtitle>
          ) : null}

          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

const Home=(props) =>{
  return (
    <>
    {//BreadCrumb.............
    }
      <div className="ms-5">
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    {//Cards..................
    }
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard item={props.dish} />
          </div>

          <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} />
          </div>

          <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
