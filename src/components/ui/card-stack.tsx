"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: any;

type Card = {
  id: number;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  duration = 5000
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  duration?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, duration);
  };

  return (
    <div className="relative max-md:mt-10 rounded-3xl h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl shadow-xl border dark:border-white/30 border-black/20   shadow-black/[0.1] dark:shadow-white/[0.1] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            {card.content}
          </motion.div>
        );
      })}
    </div>
  );
};
