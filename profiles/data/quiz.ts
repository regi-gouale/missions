import { shuffle } from "@/lib/utils";
import { firstPage } from "./first.page";
import { questions } from "./questions";

export const shuffledQuestions = shuffle(questions);

export const pages = [firstPage, ...shuffledQuestions];

export const quiz = {
  title: "Découvrez votre profil missionnaire",
  showQuestionNumbers: "off",
  showProgressBar: "top",
  showTimerPanel: "bottom",
  showTimerPanelMode: "all",
  showCompletedPage: false,

  firstPageIsStarted: true,
  startSurveyText: "Commencer le questionnaire",
  completeText: "Terminer le test",

  goNextPageAutomatic: true,
  showNavigationButtons: true,
  showPrevButton: false,

  maxTimeToFinishPage: 15,
  maxTimeToFinish: 15 * questions.length,

  pages: pages,
};
