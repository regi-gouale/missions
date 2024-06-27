import { profiles } from "@/data/profiles";

export default function ResultsComponent({
  username,
  firstProfile,
  secondProfile,
  travel,
}: {
  username: string;
  firstProfile: string;
  secondProfile: string;
  travel: string;
}) {
  const firstProfileData = profiles[firstProfile];
  const secondProfileDate = profiles[secondProfile];

  return (
    <div>
      <h1 className="">{username.toUpperCase()}</h1>
      <h2>
        Profil Missionnaire Principal : {firstProfile} - Type : {travel}
      </h2>
      <h3>Description</h3>
      <p>{firstProfileData.description}</p>
      <h3>Forces</h3>
      <p>{firstProfileData.strengths}</p>
      <h3>Réflexes</h3>
      <p>{firstProfileData.weaknesses}</p>

      <h2>
        Profil Missionnaire Secondaire : {secondProfile} - Type : {travel}
      </h2>
      <h3>Description</h3>
      <p>{secondProfileDate.description}</p>
      <h3>Forces</h3>
      <p>{secondProfileDate.strengths}</p>
      <h3>Réflexes</h3>
      <p>{secondProfileDate.weaknesses}</p>
    </div>
  );
}
