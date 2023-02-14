import React, { useState } from "react";

function SongSort({ sortSongs }) {
  const [option, setOptionValue] = useState("default");

  // brings the choosen value to the SortSongs function each time the option state updates
  React.useEffect(() => {
    sortSongs(option);
  }, [option, sortSongs]);

  // returns sorting select button
  return (
    <select
      className="sort-songs"
      value={option}
      onChange={(e) => setOptionValue(e.target.value)}
    >
      <option value="default" hidden>
        Sort Songs
      </option>
      <option value="old-new">Old-New</option>
      <option value="new-old">New-Old</option>
      <option value="song-a-z">Song A-Z</option>
      <option value="song-z-a">Song Z-A</option>
      <option value="artist-a-z">Artist A-Z</option>
      <option value="artist-z-a">Artist Z-A</option>
      <option value="genre-a-z">Genre A-Z</option>
      <option value="genre-z-a">Genre Z-A</option>
      <option value="rating-1-5">Rating 1-5</option>
      <option value="rating-5-1">Rating 5-1</option>
    </select>
  );
}

export default SongSort;
