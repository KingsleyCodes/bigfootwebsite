"use client";
import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // FIXED TARGET: Feb 14, 2026 (Month index 1 = February)
    const targetDate = new Date(2026, 1, 14, 0, 0, 0).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Card = ({ label, value }) => (
    <div className="flex flex-col items-center bg-emerald-900/40 border border-emerald-800 p-4 rounded-xl min-w-[80px] backdrop-blur-sm shadow-lg">
      <span className="text-3xl font-black text-lime-400 tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase text-emerald-500 font-bold tracking-widest">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center my-8 scale-90 md:scale-100 relative z-20">
      <Card label="Days" value={timeLeft.days} />
      <Card label="Hours" value={timeLeft.hours} />
      <Card label="Mins" value={timeLeft.minutes} />
      <Card label="Secs" value={timeLeft.seconds} />
    </div>
  );
}