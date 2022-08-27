// import Tooltip from "./Tooltip";
import React from "react";
import styled from "styled-components";
import "./Button.css";

const Body = styled.div`
  text-align: center;
  position: relative;
  border: 2px solid black;
  height: 500px;
  width: 600px;
  background: grey;
`;

const ButtonStyle = styled.button`
  width: 250px;
  height: 65px;
  border-radius: 5px;
  margin: auto;
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: red;
`;

class Button extends React.Component {
  render() {
    const { Tip, position } = this.props.state;
    const { showToolTip } = this.props;

    return (
      <Body>
        <ButtonStyle onMouseOver={showToolTip} onMouseOut={showToolTip}>
          {<div>Press</div>}
        </ButtonStyle>
        <div>
          {Tip ? (
            <div className={`box-${position} arrow-${position}`}>
              This is ToolTip
            </div>
          ) : null}
        </div>
      </Body>
    );
  }
}

export default Button;

// import React, { Component } from "react";
// import "./tool.css";

// class Tool extends Component {
//   render() {
//     const { showToolTip, position } = this.props.state;
//     const { changeShowToolTip } = this.props;
//     return (
//       <div>
//         <div
//           className="tool-button"
//           onMouseOver={changeShowToolTip}
//           onMouseOut={changeShowToolTip}
//         >
//           {<div className="button-info">Hover over me!</div> /*-- button --*/}
//         </div>
//         {showToolTip ? (
//           <div className={`box-${position} arrow-${position}`}>
//             I am a Tooltip.
//           </div> /*-- ToolTip --*/
//         ) : null}
//       </div>
//     );
//   }
// }

// export default Tool;
