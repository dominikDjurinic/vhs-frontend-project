"use server";
import { redirect } from "next/navigation";

export async function editMovie(formData: FormData, movieId: number) {
  /**PATCH, edit existing movie into database */
  const response = await fetch(`http://localhost:3000/api/vhs/${movieId}`, {
    method: "PATCH",
    body: formData,
  });

  const resp = await response.json();
  redirect(`/details/${movieId}`);
}
