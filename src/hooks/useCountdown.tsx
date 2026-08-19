import { useEffect, useState } from "react";

export type CountdownState =
  | {
      status: "counting";
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    }
  | { status: "today" }
  | { status: "past"; label: string };

const pad = (value: number): string => value.toString().padStart(2, "0");

const getRelativePastLabel = (targetDate: Date): string => {
  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;

  // Compare by calendar day, not exact ms, so "yesterday" etc. read naturally
  const startOfTarget = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate(),
  );
  const startOfNow = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const daysPast = Math.round(
    (startOfNow.getTime() - startOfTarget.getTime()) / msPerDay,
  );

  if (daysPast <= 0) return "Today";
  if (daysPast === 1) return "Yesterday";
  if (daysPast < 7) return `${daysPast} days ago`;

  if (daysPast < 30) {
    const weeksPast = Math.floor(daysPast / 7);
    return weeksPast === 1 ? "A week ago" : `${weeksPast} weeks ago`;
  }

  if (daysPast < 365) {
    const monthsPast = Math.floor(daysPast / 30);
    return monthsPast <= 1 ? "A month ago" : `${monthsPast} months ago`;
  }

  const yearsPast = Math.floor(daysPast / 365);
  return yearsPast <= 1 ? "A year ago" : `${yearsPast} years ago`;
};

const getCountdownState = (targetDate: Date): CountdownState => {
  const diff = targetDate.getTime() - Date.now();

  if (diff <= 0) {
    const now = new Date();
    const isSameDay =
      now.getFullYear() === targetDate.getFullYear() &&
      now.getMonth() === targetDate.getMonth() &&
      now.getDate() === targetDate.getDate();

    if (isSameDay) {
      return { status: "today" };
    }
    return { status: "past", label: getRelativePastLabel(targetDate) };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    status: "counting",
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
};

export const useCountdown = (targetDate: Date): CountdownState => {
  const targetTime = targetDate.getTime();

  const [state, setState] = useState<CountdownState>(() =>
    getCountdownState(targetDate),
  );

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const schedule = () => {
      const next = getCountdownState(new Date(targetTime));
      setState(next);

      // Tick every second while actively counting down; once we're in
      // "today" or "past" state, a minute is more than enough since the
      // label only changes at most once a day.
      const delay = next.status === "counting" ? 1000 : 60_000;
      timeoutId = setTimeout(schedule, delay);
    };

    schedule();

    return () => clearTimeout(timeoutId);
  }, [targetTime]);

  return state;
};
