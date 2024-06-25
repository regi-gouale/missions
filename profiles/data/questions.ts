import { Page } from "@/src/lib/types/element";
import { choices } from "./choices";

export const questions: Page[] = [
  {
    elements: [
      {
        type: "radiogroup",
        name: "gagneurAmes-1",
        title:
          "J'évangélise en me laissant guider par le Saint-Esprit au travers des rencontres ou des événements.",
        isRequired: true,
        choices: choices,
      },
    ],
  },

  {
    elements: [
      {
        type: "radiogroup",
        name: "sedentaire-5",
        title: `J’apprécie réduit au maximum mes déplacements.`,
        isRequired: true,
        choices: choices,
      },
    ],
  },
];
