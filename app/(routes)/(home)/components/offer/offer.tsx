"use client";
import Container from "@/components/layout/container";
import FlexBox from "@/components/layout/flexbox";
import Button from "@/components/ui/button";
import React, { useEffect, useState } from "react";

// Types
type CountdownTime = {
  days: number;
  hrs: number;
  mins: number;
  secs: number;
};

type OfferProps = {
  targetDate: string; // ISO date string from backend
};

const targetDate = "2025-06-01T00:00:00Z";
const Offer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hrs: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const countdownTo = new Date(targetDate);

    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = countdownTo.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

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
            className="flex-col my-12 items-start text-center tracking-widest"
            gap="6"
          >
            <h4 className="h4-styles"> Hot Offer </h4>
            <h1 className="font-bold text-3xl text-heading_color">
              Buy all your medicines at 50% offer
            </h1>
            <p className="text-sm text-paragraph max-w-[400px]">
              Get extra cashback with great deals and discounts
            </p>
            <div className="flex justify-center space-x-4 text-center">
              {Object.entries(timeLeft).map(([label, value], index) => (
                <div key={index}>
                  <div className="text-xl font-sans font-bold text-teal-500 bg-white p-4 shadow-sm mb-2 text-secondary_1">
                    {value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-paragraph font-semibold font-sans">
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
