"use client";
import Container from "@/components/layout/container";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hrs: 0,
    Mins: 0,
    Secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T00:00:00"); // Your target date

    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime(); // Use .getTime() to convert to timestamp

      if (difference <= 0) {
        clearInterval(intervalId);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
        Secs: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          "url('https://tunatheme.com/tf/html/vicodin-preview/vicodin/img/bg/25.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "600px",
        width: "100%",
      }}
    >
      <Container>
        <div className="flex flex-col  justify-center h-[600px]">
          <FlexBox
            className="flex-col my-12  items-start text-center tracking-widest"
            gap="6"
          >
            {" "}
            <h4 className="h4-styles">{"Today's Hot Offer"}</h4>
            <h1 className="font-bold text-3xl text-heading_color">
              Buy all your medicines at 50% offer
            </h1>
            <p className="text-sm text-paragraph   max-w-[400px]">
              Get extra cashback with great deals and discounts
            </p>
            <div className="flex justify-center space-x-4 text-center">
              {Object.entries(timeLeft).map(([label, value], index) => (
                <div key={index}>
                  <div className="text-xl font-sans font-bold text-teal-500 bg-white p-4 shadow-sm mb-2 text-secondary_1">
                    {value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-paragraph  font-semibold font-sans ">
                    {label.charAt(0).toUpperCase() + label.slice(1)}
                  </div>
                </div>
              ))}
            </div>
            <Button>Book Now</Button>
          </FlexBox>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
