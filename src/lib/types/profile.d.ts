export type Profile = {
  name: string;
  points: number;
  average: number;
  description: string;
  nbQuestions: number;
  strengths: string[];
  weaknesses: string[];
};
export type Profiles = {
  [key: string]: Profile;
};
