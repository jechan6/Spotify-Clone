# MusicOn

[MusicOn Live Site!](https://spotify-clone-musicon.herokuapp.com/#/)

MusicOn is a full-stack web application modeled after Spotify.
The application is built on a Rails/PostgreSQL backend with React.js and Redux on the frontend.

The project was designed and build within a 10-day timeframe with the intention of adding improvements overtime after the timeframe.

#Features

##Playlist Creation and Display

Users can create playlists and add songs to a playlist from the album. Playlist cover photo updates depending on the song inside the playlist.
![Add to Playlist](https://github.com/jechan6/Spotify-Clone/blob/master/docs/images/AddToPlaylist.png?raw=true)

Each song will handle adding itself to a chosen playlist and upon add, it will make an AJAX call to the backend and update the join table that exists between songs and playlist.

![Playlist List](https://github.com/jechan6/Spotify-Clone/blob/master/docs/images/PlaylistIndex.png?raw=true)

##Search

Users can search for albums, playlist and songs. If either one exists, it be rendered by making a request to the backend and displaying the info found. 
