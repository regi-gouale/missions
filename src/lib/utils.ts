import { profiles } from "@/data/profiles";
import { travels } from "@/data/travels";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Page } from "./types/element";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function determineQuizProfile(data: Map<string, any>) {
  let entries = Object.entries(data);

  const missionaryUsername = entries.find(
    (entry) => entry[0] === "username"
  )?.[1];
  const missionaryEmail = entries.find((entry) => entry[0] === "email")?.[1];
  const missionaryChurch = entries.find((entry) => entry[0] === "church")?.[1];

  const missionary = {
    username: missionaryUsername,
    email: missionaryEmail,
    church: missionaryChurch,
  };

  const savedMissionary = await saveMissionary(missionary);

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
    profiles[p]["average"] = profiles[p]["points"] / profiles[p]["nbQuestions"];
  }
  const profileKeys = Object.keys(profiles);
  const profileAverage = Object.values(profiles);

  let profile: Record<string, any> = {};

  for (let i = 0; i < profileKeys.length; ++i) {
    const k = String(profileKeys[i]);
    if (profile[k] === undefined) {
      profile[k] = profileAverage[i]["average"];
    }
  }

  for (const p in travels) {
    travels[p]["average"] = travels[p]["points"] / travels[p]["nbQuestions"];
  }

  const travelKeys = Object.keys(travels);
  const travelAverage = Object.values(travels);

  let travel: Record<string, any> = {};

  for (let i = 0; i < travelKeys.length; ++i) {
    const k = String(travelKeys[i]);
    if (travel[k] === undefined) {
      travel[k] = travelAverage[i]["average"];
    }
  }
  const profileTravel = {
    missionaryId: savedMissionary.data.id,
    transformateurAmes: profile["transformateurAmes"],
    manifestateurCompassion: profile["manifestateurCompassion"],
    coordinateurMission: profile["coordinateurMission"],
    gagneurAmes: profile["gagneurAmes"],
    itinerant: travel["itinerant"],
    sedentaire: travel["sedentaire"],
  };

  const savedProfile = await saveProfile(profileTravel);

  // let _profile = Object.entries(profile);
  // let _travel = Object.entries(travel);

  // _profile.sort((firstObject, secondObject) =>
  //   firstObject[1] < secondObject[1]
  //     ? 1
  //     : firstObject[1] === secondObject[1]
  //     ? firstObject[0] > secondObject[0]
  //       ? 1
  //       : -1
  //     : -1
  // );

  // _travel.sort((firstObject, secondObject) =>
  //   firstObject[1] < secondObject[1]
  //     ? 1
  //     : firstObject[1] === secondObject[1]
  //     ? firstObject[0] > secondObject[0]
  //       ? 1
  //       : -1
  //     : -1
  // );
  // return savedProfile.data.id;
  return {
    profile: savedProfile.data.id,
    missionary: savedMissionary.data.id,
  };
}

export function shuffle(questions: Page[]) {
  return questions.sort(() => Math.random() - 0.5);
}

export async function saveProfile(profileTravel: ProfileTravel) {
  const response = await fetch("/api/profiles", {
    method: "POST",
    body: JSON.stringify({ content: profileTravel }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

export async function saveMissionary(missionary: Missionary) {
  const response = await fetch("/api/missionaries", {
    method: "POST",
    body: JSON.stringify({ content: missionary }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  // console.log("data from saveMissionary", data);
  return data;
}

type Missionary = {
  username: string;
  email: string;
  church: string;
};

type ProfileTravel = {
  missionaryId: string;
  transformateurAmes: number;
  manifestateurCompassion: number;
  coordinateurMission: number;
  gagneurAmes: number;
  itinerant: number;
  sedentaire: number;
};
