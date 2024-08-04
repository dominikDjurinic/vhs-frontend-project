import Link from "next/link";

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
        <p> &#8226;</p>
        <p>{params.genre}</p>
        <p> &#8226;</p>
        <p>{params.year}.</p>
      </div>
    </Link>
  );
}
