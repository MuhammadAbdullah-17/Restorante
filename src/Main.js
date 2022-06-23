import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Contact from "./Contact";
import About from "./About";
import { addComment } from "./redux/ActionCreators";
import Home from "./Home";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, name, comment) =>
    dispatch(addComment(dishId, rating, name, comment))
});

class Main extends Component {
  render() {
    const AboutUs = () => {
      return <About name={this.props.leaders} />;
    };

    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
