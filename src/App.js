import Card from "./components/Card";

const App = () => {
  const objects = [
    {
      id: 1,
      img: "1.png",
      title: "First",
      explanation: "Hello World 1",
    },
    {
      id: 2,
      img: "2.png",
      title: "Second",
      explanation: "Hello World 2",
    },
    {
      id: 3,
      img: "3.png",
      title: "Third",
      explanation: "Hello World 3",
    },
    {
      id: 4,
      img: "4.png",
      title: "Fourth",
      explanation: "Hello World 4",
    },
  ];

  return (
    <div className="container">
      <Card object={objects} i={0} />
      <Card object={objects} i={1} />
      <Card object={objects} i={2} />
      <Card object={objects} i={3} />
    </div>
  );
};

export default App;
