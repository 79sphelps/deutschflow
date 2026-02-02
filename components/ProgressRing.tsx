"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function ProgressRing({ value }: { value: number }) {
  return (
    <div className="w-20 h-20">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: "#2563eb",
          textColor: "#111827",
          trailColor: "#e5e7eb",
        })}
      />
    </div>
  );
}
