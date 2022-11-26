import "./App.css";
import Card from "./card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  var priceCards = [
    {
      plan: "Free",
      price: "0",
      buttonOutline: "true",
      features: [
        {
          title: "10 users included",
        },
        {
          title: "2 gb of storage",
        },
        {
          title: "Email Support",
        },
        {
          title: "Help center Access",
        },
      ],
    },
    {
      plan: "pro",
      price: "15",
      buttonOutline: "false",
      features: [
        {
          title: "20 users included",
        },
        {
          title: "10 gb of storage",
        },
        {
          title: " priority Email Support",
        },
        {
          title: "Help center Access",
        },
      ],
    },
    {
      plan: "Enterpise",
      price: "25",
      buttonOutline: "false",
      highlight: true,
      features: [
        {
          title: "30 users included",
        },
        {
          title: "15 gb of storage",
        },
        {
          title: "Phone and Email Support",
        },
        {
          title: "Help center Access",
        },
      ],
    },
  ];
  return (
    <div className="container">
      <div className="row mt-3">
        {priceCards.map((card) => {
          return <Card card={card}></Card>;
        })}
      </div>
    </div>
  );
}

export default App;
