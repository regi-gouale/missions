import { profiles } from "@/data/profiles";
import { travels } from "@/data/travels";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Page } from "./types/element";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function determineQuizProfile(data: Map<string, any>) {
  let entries = Object.entries(data);

  entries.forEach(function (entry) {
    const p = entry[0].split("-")[0];

    if (profiles[p] !== undefined) {
      profiles[p]["points"] += entry[1];
    }
    if (travels[p] !== undefined) {
      travels[p]["points"] += entry[1];
    }
  });

  for (const p in profiles) {
    console.log(profiles[p]);
    profiles[p]["average"] = profiles[p]["points"] / profiles[p]["nbQuestions"];
  }
  for (const p in travels) {
    travels[p]["average"] = travels[p]["points"] / travels[p]["nbQuestions"];
  }

  let travel = Object.keys(travels).reduce((a, b) =>
    travels[a]["average"] > travels[b]["average"] ? a : b
  );
  let profile = Object.keys(profiles).reduce((a, b) =>
    profiles[a]["average"] > profiles[b]["average"] ? a : b
  );

  return profile + "-" + travel;
}

export function shuffle(questions: Page[]) {
  return questions.sort(() => Math.random() - 0.5);
}
