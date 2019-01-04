import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.name = "Michell";
  }

  render() {
    return (
      <div className="first-one">
        <h1>{this.name}</h1>
        <p>This is working like magic ! </p>
        <h2>The Fun Section !</h2>
        <p>Wanna be a clown? COME SIGN UP !</p>
        <h3>ITS WORKING!</h3>
        <p>this aint going too bad</p>
      </div>
    );
  }
}

export default Home;
