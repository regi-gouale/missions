"use client";
import ResultsComponent from "@/components/results";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSWR, { Fetcher } from "swr";

const fetcher = async (...args: [RequestInfo, RequestInit?]) => {
  const res = await fetch(...args);
  return res.json();
};

export default function Results() {
  const searchParams = useSearchParams();
  const profileId = searchParams.get("profile");
  const missionaryId = searchParams.get("missionary");
  // console.log(profileId, missionaryId);

  const {
    data: profile,
    error: profileError,
    isLoading: profileIsLoading,
  } = useSWR(`/api/profiles/${profileId}`, fetcher);

  const {
    data: missionary,
    error: missionaryError,
    isLoading: missionaryIsloading,
  } = useSWR(`/api/missionaries/${missionaryId}`, fetcher);
  if (profileError || missionaryError) {
    return <div>Failed to load</div>;
  }
  if (profileIsLoading || missionaryIsloading) {
    return <div>Loading...</div>;
  } else {
    // console.log(profile);
    // console.log(missionary);

    const profileData = {
      gagneurAmes: profile!.data.gagneurAmes,
      coordinateurMission: profile.data.coordinateurMission,
      manifestateurCompassion: profile.data.manifestateurCompassion,
      transformateurAmes: profile.data.transformateurAmes,
    };

    let _profile = Object.entries(profileData).sort((a, b) =>
      a[1] < b[1] ? 1 : a[1] === b[1] ? (a[0] > b[0] ? 1 : -1) : -1
    );
    // console.log(_profile[0][0]);
    // console.log(_profile[1][0]);

    const travelData = {
      sedentaire: profile.data.sedentaire,
      itinerant: profile.data.itinerant,
    };

    let _travel = Object.entries(travelData).sort((a, b) =>
      a[1] < b[1] ? 1 : a[1] === b[1] ? (a[0] > b[0] ? 1 : -1) : -1
    );
    // console.log(_travel[0][0]);

    const missionaryData = {
      username: missionary.data.username,
    };
    return (
      <div>
        <h1>Results</h1>
        <Link href="/">
          <Button className="rounded-full" variant="default">
            Back
          </Button>
        </Link>
        <ResultsComponent
          username={missionaryData.username}
          firstProfile={_profile[0][0]}
          secondProfile={_profile[1][0]}
          travel={_travel[0][0]}
        />
      </div>
    );
    // console.log(profileData);
    // console.log(travelData);
  }
}
