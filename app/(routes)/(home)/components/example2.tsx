"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "./example";

interface PaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
}

interface IndicatorProps {
  isSelected: boolean;
  onClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setPage }) => {
  return (
    <div className="Indicators">
      {pages.map((page) => (
        <Indicator
          key={page}
          onClick={() => setPage(page)}
          isSelected={page === currentPage}
        />
      ))}
    </div>
  );
};

const Indicator: React.FC<IndicatorProps> = ({ isSelected, onClick }) => {
  return (
    <div className="Indicator-container" onClick={onClick}>
      <div className="Indicator">
        <AnimatePresence>
          {isSelected && (
            <motion.div
              className="Indicator-highlight"
              layoutId="highlight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const pages = [0, 1, 2, 3, 4];

const App: React.FC = () => {
  const [[currentPage, direction], setCurrentPage] = useState<[number, number]>(
    [0, 0]
  );

  function setPage(newPage: number, newDirection?: number) {
    if (newDirection === undefined) {
      newDirection = newPage - currentPage;
    }
    setCurrentPage([newPage, newDirection]);
  }

  return (
    <>
      <Carousel
        currentPage={currentPage}
        direction={direction}
        setPage={setPage}
      />
      <Pagination currentPage={currentPage} setPage={setPage} />
    </>
  );
};

export default App;
