import { NextResponse } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    "https://gouale.com:8000",
    "marchez-selon-l-esprit-et-vous-n-accomplirez-pas-les-desirs-de-la-chair"
  );

  // const cookieStore = cookies();
  // const supabase = createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       get(name: string) {
  //         return cookieStore.get(name)?.value;
  //       },
  //       set(name: string, value: string, options: CookieOptions) {
  //         try {
  //           cookieStore.set({ name, value, ...options });
  //         } catch (error) {}
  //       },
  //       remove(name: string, options: CookieOptions) {
  //         try {
  //           cookieStore.set({ name, value: "", ...options });
  //         } catch (error) {}
  //       },
  //     },
  //   }
  // );

  // const { data } = await supabase.from("missionaries").select();
  // return NextResponse.json(data);
}
