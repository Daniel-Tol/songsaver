import { useState } from "react";

function SongForm({ addSong }) {
  const [song, setTitleValue] = useState("");
  const [artist, setArtistValue] = useState("");
  const [genre, setGenreValue] = useState("");
  const [rating, setRatingValue] = useState("Rate Song");

  // brings the values to the AddSong function if button is pressed, gives alert if values aren't filled in.
  function onButtonPress() {
    if (
      song.length === 0 ||
      artist.length === 0 ||
      genre.length === 0 ||
      rating === "Rate Song"
    ) {
      alert("Please fill in all values!");
    } else {
      addSong(song, artist, genre, rating);
    }
  }

  // returns the song form
  return (
    <div className="song-form">
      <input
        type="text"
        value={song}
        placeholder="Song"
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <input
        type="text"
        value={artist}
        placeholder="Artist"
        onChange={(e) => setArtistValue(e.target.value)}
      />
      <input
        type="text"
        value={genre}
        placeholder="Genre"
        onChange={(e) => setGenreValue(e.target.value)}
      />
      <select value={rating} onChange={(e) => setRatingValue(e.target.value)}>
        <option value="Rate Song" hidden>
          Rate Song
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={onButtonPress}>Add Song</button>
    </div>
  );
}

export default SongForm;
