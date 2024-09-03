"use server";
import { redirect } from "next/navigation";

export async function deleteVhs(movieId: number) {
  /**DELETE VHS movie by id from database**/
  const response = await fetch(`http://localhost:3000/api/vhs/${movieId}`, {
    method: "DELETE",
  });

  redirect("/catalogue");
}
