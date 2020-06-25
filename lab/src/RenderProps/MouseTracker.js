import React from "react";
import PropTypes from "prop-types";
////4
// function withMouse(Component) {
//   return class extends React.Component {
//     render() {
//       return (
//         <Mouse
//           render={(mouse) => <Component {...this.props} mouse={mouse} />}
//         />
//       );
//     }
//   };
// }

// function Cat(props) {
//   const mouse = props.mouse;
//   return (
//     <img
//       src="/cat.jpg"
//       style={{ position: "absolute", left: mouse.x, top: mouse.y }}
//     />
//   );
// }

// function Mouse(props) {
//   const [pos, setPos] = React.useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     setPos({ x: event.clientX, y: event.clientY });
//   };
//   return (
//     <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
//       {props.children(pos)}
//     </div>
//   );
// }

// function MouseTracker() {
//   return (
//     <>
//       <h1>Move the mouse around!</h1>
//       {/* <Mouse children={(mouse) => <Cat mouse={mouse} />} /> */}
//       <Mouse>
//         {(mouse) => (
//           <p>
//             The mouse position is {mouse.x}, {mouse.y}
//           </p>
//         )}
//       </Mouse>
//     </>
//   );
// }
// Mouse.propTypes = {
//   children: PropTypes.func.isRequired
// }
//3
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse
          render={(mouse) => <Component {...this.props} mouse={mouse} />}
        />
      );
    }
  };
}

function Cat(props) {
  const mouse = props.mouse;
  console.log("Cat Props: ", props);
  return (
    <img
      src="/cat.jpg"
      style={{ position: "absolute", left: mouse.x, top: mouse.y }}
    />
  );
}

function Mouse(props) {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPos({ x: event.clientX, y: event.clientY });
  };
  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {props.render(pos)}
    </div>
  );
}

function MouseTracker() {
  const MouseWithCat = withMouse(Cat);
  return (
    <>
      <h1>Move the mouse around!</h1>
      {/* <Mouse render={(mouse) => <Cat mouse={mouse} />} /> */}
      <MouseWithCat one={1} two={2} />
    </>
  );
}

////2
// function Cat(props) {
//   const mouse = props.mouse;
//   return (
//     <img
//       src="/cat.jpg"
//       style={{ position: "absolute", left: mouse.x, top: mouse.y }}
//     />
//   );
// }

// function MouseWithCat() {
//   const [pos, setPos] = React.useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     setPos({ x: event.clientX, y: event.clientY });
//   };
//   return (
//     <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
//       <Cat mouse={pos} />
//     </div>
//   );
// }

// function MouseTracker() {
//   return (
//     <>
//       <h1>Move the mouse around!</h1>
//       <MouseWithCat />
//     </>
//   );
// }

////1
// function Mouse() {
//   const [pos, setPos] = React.useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     setPos({ x: event.clientX, y: event.clientY });
//   };
//   return (
//     <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>

//       <p>
//         The current mouse position is ({pos.x}, {pos.y})
//       </p>
//     </div>
//   );
// }

// function MouseTracker() {
//   return (
//     <>
//       <h1>Move the mouse around!</h1>
//       <Mouse />
//     </>
//   )
// }

export default MouseTracker;
