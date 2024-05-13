import { useState } from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";
import Card from "./components/ui/Card";

const LENGTH = 5;

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function App() {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentSlide = wrap(0, LENGTH, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <main className="h-screen relative flex items-center justify-center overflow-hidden bg-medium-vermilion bg-body-pattern">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="absolute cursor-grab active:cursor-grabbing"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.y, velocity.y);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Card content={currentSlide} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default App;
