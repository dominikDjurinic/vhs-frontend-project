import Link from "next/link";
import { redirect } from "next/navigation";

export function SearchItem(params: {
  id: number;
  title: string;
  genre: string;
  year: number;
}) {
  return (
    <Link href={`/details/${params.id}`}>
      <div className="searchItemDiv">
        <p className="searchTitle">{params.title}</p>
        <p>{params.genre}</p>
        <p>{params.year}.</p>
      </div>
    </Link>
  );
}
