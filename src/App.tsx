import { Card, CardBody, CardHeader } from "./components/Card";

const LENGTH = 5;

const cards = Array.from({ length: LENGTH }, (_, idx) => idx + 1);

function App() {
  return (
    <main className="h-screen relative flex items-center justify-center overflow-hidden bg-medium-vermilion bg-body-pattern">
      {cards.map((card, idx) => (
        <Card key={idx}>
          <CardHeader className="flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">{card}</h1>
          </CardHeader>
          <CardBody />
        </Card>
      ))}
    </main>
  );
}

export default App;
