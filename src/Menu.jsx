import React from "react";
import "./App.css";
import { dishes } from "./Data";
import Cards from "./Cards";
import { Breadcrumb } from "react-bootstrap";
const Menu = () => {
  return (
    <div className="App">
      <div className="ms-5 ">
      <Breadcrumb >
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Menu</Breadcrumb.Item>
      </Breadcrumb>
      </div>
      <div className="container me-4">
        <div className="row">
          {dishes.map((data) => {
            return <Cards key={data.key} img={data.image} name={data.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
