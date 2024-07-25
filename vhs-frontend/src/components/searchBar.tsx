import Image from "next/image";

export function SearchBar(props: { isSmall: boolean }) {
  return (
    <div className={`${props.isSmall ? "searchBarSmall" : "searchBar"}`}>
      <input placeholder="Search by movie title ..."></input>
      <Image
        src={"/fi-br-search.png"}
        alt="right icon"
        width={20}
        height={20}
      />
    </div>
  );
}
