"use server";
import { EditVHSDetails, NewVHSDetails } from "@/model/vhs";
import { redirect } from "next/navigation";

export async function editMovie(
  newMovie: NewVHSDetails | undefined,
  movieId: number,
  quantity: number
) {
  if (newMovie !== undefined) {
    const editedMovie: EditVHSDetails = {
      id: movieId,
      ...newMovie,
      quantity: quantity,
    };
    const response = await fetch(`http://localhost:3000/api/vhs/${movieId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(editedMovie),
    });

    const resp = await response.json();
    redirect(`/details/${movieId}`);
  }
}
