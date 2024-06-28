"use client";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useRouter } from "next/navigation";
import { LayeredLightPanelless } from "@/src/lib/themes/layered-light-panelless";
import { determineQuizProfile } from "@/src/lib/utils";

import "survey-core/defaultV2.min.css";

export default function QuizComponent({quiz}: {quiz: any}) {
  const router = useRouter();
  const model = new Model(quiz);
  model.applyTheme(LayeredLightPanelless);

  model.onComplete.add(async (sender, options) => {
    const data = await determineQuizProfile(sender.data);
    const profileId = data.profile;
    const missionaryId = data.missionary;
    router.push(`/results?profile=${profileId}&missionary=${missionaryId}`);
  });
  return <Survey model={model} />;
}
