import { useState } from "react";
import { Card, CardBody, CardHeader } from "./components/Card";

const LENGTH = 5;
const CARD_HEIGHT = 384;
const CARD_SPACING = 35;

const cards = Array.from({ length: LENGTH }, (_, idx) => idx + 1);

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const halfwayIndex = Math.ceil(LENGTH / 2);
  const itemHeight = CARD_HEIGHT + CARD_SPACING;
  const shuffleThreshold = halfwayIndex * itemHeight;

  const determinePlacement = (itemIndex: number) => {
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(LENGTH + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (LENGTH - (activeIndex - itemIndex)) * itemHeight;
      }

      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction: "next" | "prev") => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > LENGTH - 1) {
          return 0;
        }

        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return LENGTH - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <main className="h-screen overflow-hidden bg-medium-vermilion bg-body-pattern">
      <div className="h-full flex-1 relative flex items-center justify-center">
        {cards.map((card, idx) => (
          <div
            className="absolute top-30"
            style={{
              transform: `translateY(${determinePlacement(idx)}px)`,
            }}
            key={idx}
          >
            <Card>
              <CardHeader className="flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold">{card}</h1>
              </CardHeader>
              <CardBody />
            </Card>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0">
        <button onClick={() => handleClick("prev")}>Prev</button>
        <button onClick={() => handleClick("next")}>Next</button>
      </div>
    </main>
  );
}

export default App;
