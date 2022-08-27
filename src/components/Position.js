import styled from "styled-components";

const Sel = styled.div`
  position: fixed;
  top: 110px;
  left: 50vw;
`;

function Tooltip() {
  return (
    <Sel>
      <label>Position :- </label>
      <select name="positions" id="positions">
        <option value="top">Top</option>
        <option value="bottom">Buttom</option>
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
    </Sel>
  );
}

export default Tooltip;

// import React, { Component } from "react";
// import "./selectPosition.css";

// class SelectPostition extends Component {
//   render() {
//     return (
//       <div className="position-selector">
//         <label>Select the Position :- </label>
//         <select name="positions" id="positions">
//           {/* Dropdown Button for Selecting Position    */}
//           <option value="top">Top</option>
//           <option value="bottom">Bottom</option>
//           <option value="right">Right</option>
//           <option value="left">Left</option>
//         </select>
//       </div>
//     );
//   }
// }

// export default SelectPostition;
