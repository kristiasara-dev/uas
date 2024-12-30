import React from "react";

const Slider = () => {
  const handleNext = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  };

  const handlePrev = () => {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={handlePrev}>
        Prev
      </button>
      <div className="slide">
        {/* Items will go here */}
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
      </div>
      <button className="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Slider;
