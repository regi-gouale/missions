"use client";

import "survey-core/defaultV2.min.css";
import { quiz } from "../data/quiz";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useRouter } from "next/navigation";
import { LayeredLightPanelless } from "@/lib/themes/layered-light-panelless";
import { determineQuizProfile } from "@/lib/utils";

export default function QuizComponent() {
  const router = useRouter();
  const model = new Model(quiz);
  model.applyTheme(LayeredLightPanelless);

  model.onComplete.add((sender, options) => {
    console.log(sender.data);
    // console.log(options);
    determineQuizProfile(sender.data);
    router.push(`/results`);
  });
  return <Survey model={model} />;
}
