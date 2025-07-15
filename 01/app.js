const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement(
        "h1",
        {
          id: "heading",
          key: "1",
        },
        "Hello, World! from React"
      ),
      React.createElement(
        "h2",
        {
          id: "heading",
          key: "2",
        },
        "Hello, World! from React"
      ),
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
