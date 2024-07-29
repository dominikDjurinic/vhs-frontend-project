"use server";
import { NewVHSDetails } from "@/model/vhs";
import { redirect } from "next/navigation";

export async function addNewMovie(newMovie: NewVHSDetails | undefined) {
  const response = await fetch("http://localhost:3000/api/vhs", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newMovie),
  });

  const resp = await response.json();
  redirect("/catalogue");
}
