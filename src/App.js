import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import { Route, Redirect, Switch } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import { LEADERS } from "./Data/leaders";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    };
  }
  render() {
    const AboutUs = () => {
      return <About name={this.state.leaders} />;
    };
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/About" component={AboutUs}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
          <Route exact path="/Menu" component={Menu}></Route>
          <Redirect path="/" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
