import React from "react";
import ReactDOM from "react-dom/client";

// if it was a h2 tag this would cause hydration error in react
const Test = () => <span>Test React</span>;

// React.createElement => Object => HTMLElement(render  )
const heading = React.createElement("h1", {}, <Test />);
const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = () => <h2>Title Component</h2>;

// React Functional Component - NEW
const HeadingComponent = () => (
  <div>
    <Title />
    {Test()}
    <Title></Title>
    {console.log(
      [9, 0, 1].map((a) => {
        console.log(a);
      })
    )}
    <h1>React Functional Component</h1>
  </div>
);

// Class Based Component - OLD

// JSX Heading
const jsxHeading = <h1>JSX Heading more and more and more and more</h1>;

root.render(<HeadingComponent />);
