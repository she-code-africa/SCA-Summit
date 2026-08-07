import { useEffect, useState } from "react";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const pad = (value: number): string => value.toString().padStart(2, "0");

const getTimeLeft = (targetDate: Date): TimeLeft => {
  const diff = Math.max(targetDate.getTime() - Date.now(), 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
};

export const useCountdown = (targetDate: Date): TimeLeft => {
  const targetTime = targetDate.getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetDate),
  );

  useEffect(() => {
    setTimeLeft(getTimeLeft(new Date(targetTime)));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date(targetTime)));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return timeLeft;
};
