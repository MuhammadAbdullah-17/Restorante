import React from "react";
import { Breadcrumb } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="ms-5">
        <Breadcrumb>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};

export default Home;
