import React from "react";
import "./index";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Content />
        <Header />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <p> I understood RAvi</p>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h2> I understood chandar </h2>;
  }
}

export class Fnccomp extends React.Component {
  render() {
    return <h3>HELLLLLo</h3>;
  }
}

//function Incrementcclick(){
//const clickincrement= cilckhover => {

//}

export class Clickcounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  UpdateClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.UpdateClick}>clicked {count} time</button>
      </div>
    );
  }
}

export class Cilckhover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  HoverClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.HoverClick}>
          clicked hover {count} time
        </button>
      </div>
    );
  }
}

export default App;
// there is a new change in try in git /local/ from <reactcodesandbox-1></reactcodesandbox-1>