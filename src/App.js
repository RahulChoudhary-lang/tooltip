import React, { Component } from "react";
import Button from "./components/Button";
import Position from "./components/Position";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Tip: false,
      position: "top",
    };
  }

  showToolTip = () => {
    console.log("Tip");
    const { Tip } = this.state;
    let position = document.getElementById("positions").value;
    this.setState({
      Tip: !Tip,
      position,
    });
    console.log("Tip jkhk");
  };

  render() {
    return (
      <div>
        <Button state={this.state} showToolTip={this.showToolTip} />
        <Position />
      </div>
    );
  }
}

export default App;

// import React from "react";
// // import "./App.css";
// // import Tool from "./tool";
// // import SelectPostition from "./selectPosition";
// import Tool from "./components/Button";
// import SelectPostition from "./components/Tooltip";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showToolTip: false,
//       position: "top", //    default  value for position & showTooltip
//     };
//   }

//   //Function for changTooltip Position
//   changeShowToolTip = () => {
//     console.log("Mouse Over!");
//     const { showToolTip } = this.state;
//     let position = document.getElementById("positions").value; // getting position from user
//     this.setState({
//       showToolTip: !showToolTip,
//       position,
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         <Tool state={this.state} changeShowToolTip={this.changeShowToolTip} />
//         <SelectPostition />
//       </div>
//     );
//   }
// }

// export default App;
