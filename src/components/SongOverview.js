import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import SongSort from "./SongSort";

// initial state
class SongOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        {
          id: 1,
          song: "21 Candles",
          artist: "1986 Omega Tribe",
          genre: "City Pop",
          rating: "5",
        },
        {
          id: 2,
          song: "Misty Lady",
          artist: "Casiopea",
          genre: "Jazz Fusion",
          rating: "5",
        },
        {
          id: 3,
          song: "Cascade",
          artist: "Plini",
          genre: "Progressive Metal",
          rating: "5",
        },
      ],
      check: true,
    };
  }

  // add new song to state
  addSong = (song, artist, genre, rating) => {
    this.setState({
      songs: [
        ...this.state.songs,
        {
          id: this.state.songs.length + 1,
          song: song,
          artist: artist,
          genre: genre,
          rating: rating,
        },
      ],
    });
  };

  // delete song from state
  deleteSong = (song) => {
    this.setState({
      songs: this.state.songs.filter((item) => item !== song),
    });
  };

  // sort songs by case
  sortSongs = (event) => {
    switch (event) {
      case "old-new":
        this.setState({
          songs: this.state.songs.sort((a, b) => a.id - b.id),
        });
        break;

      case "new-old":
        this.setState({
          songs: this.state.songs.sort((a, b) => b.id - a.id),
        });
        break;

      case "song-a-z":
        this.setState({
          songs: this.state.songs.sort((a, b) => {
            let x = a.song.toUpperCase(),
              y = b.song.toUpperCase();
            return x === y ? 0 : x > y ? 1 : -1;
          }),
        });
        break;

      case "song-z-a":
        this.setState({
          songs: this.state.songs.sort((a, b) => {
            let x = a.song.toUpperCase(),
              y = b.song.toUpperCase();
            return y === x ? 0 : y > x ? 1 : -1;
          }),
        });
        break;

      case "artist-a-z":
        this.setState({
          songs: this.state.songs.sort((a, b) => {
            let x = a.artist.toUpperCase(),
              y = b.artist.toUpperCase();
            return x === y ? 0 : x > y ? 1 : -1;
          }),
        });
        break;

      case "artist-z-a":
        this.setState({
          songs: this.state.songs.sort((a, b) => {
            let x = a.artist.toUpperCase(),
              y = b.artist.toUpperCase();
            return y === x ? 0 : y > x ? 1 : -1;
          }),
        });
        break;

      case "genre-a-z":
        this.setState({
          songs: this.state.songs.sort((a, b) => {
            let x = a.genre.toUpperCase(),
              y = b.genre.toUpperCase();
            return x === y ? 0 : x > y ? 1 : -1;
          }),
        });
        break;

      case "genre-z-a":
        this.setState({
          songs: this.state.songs.sort((a, b) => {
            let x = a.genre.toUpperCase(),
              y = b.genre.toUpperCase();
            return y === x ? 0 : y > x ? 1 : -1;
          }),
        });
        break;

      case "rating-1-5":
        this.setState({
          songs: this.state.songs.sort((a, b) => a.rating - b.rating),
        });
        break;

      case "rating-5-1":
        this.setState({
          songs: this.state.songs.sort((a, b) => b.rating - a.rating),
        });
        break;

      default:
        this.setState({
          songs: this.state.songs.sort((a, b) => a.id - b.id),
        });
    }
  };

  // switch from default view to categorized genres view and back
  switch = () => {
    this.setState((prevState) => ({
      check: !prevState.check,
    }));
  };

  render() {
    // map all genres and filter duplicates
    const mapGenres = this.state.songs.map((item) => item.genre);
    const filterGenres = mapGenres.filter(
      (type, index) => mapGenres.indexOf(type) === index
    );

    // if check is true, returns the default view, else returns categorized genres view
    if (this.state.check) {
      return (
        <div>
          <div className="header">
            <h1 className="title">Songsaver</h1>
            <SongForm addSong={this.addSong} />
            <SongSort sortSongs={this.sortSongs} />
            <button className="categorize-genres" onClick={this.switch}>
              Categorize Genres
            </button>
          </div>
          <div className="value-titles">
            <h2>Song</h2>
            <h2>Artist</h2>
            <h2>Genre</h2>
            <h2>Rating</h2>
          </div>
          <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
        </div>
      );
    } else {
      return (
        <div>
          <div className="header">
            <h1 className="title">Songsaver</h1>
            <SongForm addSong={this.addSong} />
            <SongSort sortSongs={this.sortSongs} />
            <button className="categorize-genres" onClick={this.switch}>
              Default List
            </button>
          </div>
          {filterGenres.map((item, index) => (
            <div key={index}>
              <div className="value-titles">
                <h2>Song</h2>
                <h2>Artist</h2>
                <h2> {item} </h2>
                <h2>Rating</h2>
              </div>
              <SongList
                songs={this.state.songs}
                deleteSong={this.deleteSong}
                categorizeGenre={item}
              />
            </div>
          ))}
        </div>
      );
    }
  }
}

export default SongOverview;
