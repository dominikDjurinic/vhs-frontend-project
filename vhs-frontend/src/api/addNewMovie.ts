"use server";
import { redirect } from "next/navigation";

export async function addNewMovie(formData: FormData) {
  /**POST new movie into database */
  const response = await fetch("http://localhost:3000/api/vhs", {
    method: "POST",
    body: formData,
  });

  const resp = await response.json();
  redirect("/catalogue");
}
