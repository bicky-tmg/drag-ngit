import { useState } from "react";
import { Card, CardBody, CardHeader } from "./components/Card";
import { motion } from "framer-motion";
import {
  CARDS,
  CARD_HEIGHT,
  CARD_SPACING,
  LENGTH,
  SWIPE_CONFIDENCE_THRESHOLD,
} from "./constant/common";
import { swipePower } from "./utils/swipePower";

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

  const handleDrag = (direction: "next" | "prev") => {
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
      <motion.div
        className="h-full flex-1 relative flex items-center justify-center cursor-grab active:cursor-grabbing"
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={1}
        onDragEnd={(_, { offset, velocity }) => {
          const swipe = swipePower(offset.y, velocity.y);

          if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
            handleDrag("next");
          } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
            handleDrag("prev");
          }
        }}
      >
        {CARDS.map((card, idx) => (
          <motion.div
            className="absolute top-30 transition-opacity"
            animate={{
              translateY: `${determinePlacement(idx)}px`,
              scale: activeIndex === idx ? 1 : 0.85,
              opacity: activeIndex === idx ? 1 : 0.4,
            }}
            key={idx}
          >
            <Card>
              <CardHeader className="flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold">{card}</h1>
              </CardHeader>
              <CardBody />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

export default App;
