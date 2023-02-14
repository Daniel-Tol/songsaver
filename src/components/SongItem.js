function SongItem({ song, deleteSong }) {
  // returns new song item
  return (
    <ul key={song.id} value={song.song} className="song-row">
      <li>{song.song}</li>
      <li>{song.artist}</li>
      <li>{song.genre}</li>
      <li>{song.rating}</li>
      <li>
        <button onClick={() => deleteSong(song)}>Delete</button>
      </li>
    </ul>
  );
}

export default SongItem;
