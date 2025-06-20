"use client";

import React from "react";
import clsx from "clsx";

type Step = {
  id: number;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
};

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
      {steps.map((step, index) => (
        <li
          key={step.id}
          className={clsx("ms-6", index !== steps.length - 1 && "mb-10")}
        >
          <span
            className={clsx(
              "absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900",
              {
                "bg-green-200 dark:bg-green-900": step.status === "completed",
                "bg-gray-100 dark:bg-gray-700": step.status !== "completed",
              }
            )}
          >
            {step.status === "completed" ? (
              <svg
                className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            ) : (
              <svg
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
              </svg>
            )}
          </span>

          <h3
            className={clsx("font-medium leading-tight", {
              "text-black dark:text-white": step.status === "current",
            })}
          >
            {step.title}
          </h3>
          <p className="text-sm">{step.description}</p>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
