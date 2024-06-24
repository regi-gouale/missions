"use client";

// import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Results() {

  return (
    <div>
      <h1>Results</h1>
      <Link href="/">
        <Button className="rounded-full" variant='default'>
          Back
        </Button>
      </Link>
    </div>
  );
}
