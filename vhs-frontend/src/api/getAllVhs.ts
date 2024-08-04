"use server";
import { VHSDetails } from "@/model/vhs";

export async function getAllVhs() {
  /**GET all VHS movies from database**/
  const response = await fetch("http://localhost:3000/api/vhs", {
    method: "GET",
  });

  const details: VHSDetails[] = await response.json();

  return details;
}
