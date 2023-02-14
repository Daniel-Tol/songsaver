import React, { Component } from "react";
import SongItem from "./SongItem.js";

class SongList extends Component {
  render() {
    // if categorize genre is a prop, returns filtered songlist for specific genre, else returns the whole songlist
    if (this.props.categorizeGenre) {
      return (
        <ul>
          {this.props.songs
            .filter((song) => song.genre === this.props.categorizeGenre)
            .map((song) => (
              <SongItem
                key={song.id}
                song={song}
                deleteSong={() => this.props.deleteSong(song)}
              />
            ))}
        </ul>
      );
    } else {
      return (
        <ul>
          {this.props.songs.map((song) => (
            <SongItem
              key={song.id}
              song={song}
              deleteSong={() => this.props.deleteSong(song)}
            />
          ))}
        </ul>
      );
    }
  }
}

export default SongList;
