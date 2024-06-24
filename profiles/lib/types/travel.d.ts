export type Travel = {
  name: string;
  points: number;
  average: number;
  nbQuestions: number;
};

export type Travels = {
  [key: string]: Travel;
};
