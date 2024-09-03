"use server";
import { VHSDetails } from "@/model/vhs";

export async function getVhsById(movieId: number) {
  /**GET VHS movie details by id from database**/
  const response = await fetch(`http://localhost:3000/api/vhs/${movieId}`, {
    method: "GET",
  });

  const details: VHSDetails = await response.json();

  return details;
}
