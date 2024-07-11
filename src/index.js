import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="container">
      <div className="sub-container">
        <Image />
        <Text />
      </div>
    </div>
  );
}

const Image = () => {
  return (
    <div className="image-container">
      <img src="./IMG_E1908.JPG" alt="habeeb" />
    </div>
  );
};

const Text = () => {
  return (
    <div className="text">
      <h1> Abdulakeem habeeb </h1>
      <p>
        {" "}
        Am a frontend web developer. When not coding, I like playing football or
        cook(and eat), or to just enjoy the go on a ride to see the view of the
        city{" "}
      </p>
      <div className="sticker-container">
        <Sticker content="HTML5 + CSS3 💪" color="red" />
        <Sticker content="JAVASCRIPT 💪" color="yellow" />
        <Sticker content="WEB DESIGN 👍" color="green" />
        <Sticker content="GIT AND GITHUB 👍" color="pink" />
        <Sticker content="REACT 💪" color="blue" />
        <Sticker content="TYPESCRIPT 😃" color="aqua" />
      </div>
    </div>
  );
};

const Sticker = (props) => {
  return (
    <div className="sticker" style={{ backgroundColor: props.color }}>
      <p>{props.content} </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
