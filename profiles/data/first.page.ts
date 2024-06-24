import { Page } from "@/lib/types/element";

export const firstPage: Page = {
  elements: [
    {
      type: "html",
      html: `Veuillez répondre aux questions suivantes en vous basant sur votre expérience personnelle. 
        <br/> <br/> 
        <b>Attention:</b> Vous aurez 15 secondes pour répondre à chaque question.
        <br/> <br/>
        <b>RGPD:</b> Les données collectées ne seront pas utilisées à des fins commerciales.
        Vous pouvez demander la suppression de vos données à tout moment en envoyant un mail à l'adresse suivante: <a href="mailto:projets.numeriques.icclyon@gmail.com">projets.numeriques.icclyon@gmail.com</a>`,
    },
    {
      type: "text",
      name: "username",
      title: "Saisissez vos prénoms et nom",
      isRequired: true,
    },
    {
      type: "text",
      name: "email",
      title: "Saisissez votre email",
      isRequired: true,
      validators: [{ type: "email" }],
    },
    {
      type: "dropdown",
      name: "church",
      title: "Quelle est votre église ?",
      isRequired: true,
      showNoneItem: false,
      showOtherItem: true,
      otherText: "Autre",
      choices: [
        "Église de Lyon (Principale)",
        "Église de Lyon Centre",
        "Église de Grenoble",
        "Église de Clermont-Ferrand",
        "Église de Saint-Etienne",
        "Église d'Annecy",
        "Église d'Annemasse",
        "Église de Bourg-en-Bresse",
        "Église de Chambéry",
      ],
    },
  ],
};
