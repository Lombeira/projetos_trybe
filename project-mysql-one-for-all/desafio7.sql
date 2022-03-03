SELECT 
 artists.artist_name AS artista,
 albums.album_name AS album,
 COUNT(artist_followers.artist_id) AS seguidores
  FROM SpotifyClone.albums AS albums
  INNER JOIN SpotifyClone.artists AS artists
   ON albums.artist_id = artists.artist_id
  INNER JOIN SpotifyClone.artist_followers AS artist_followers
   ON artist_followers.artist_id = albums.artist_id
  GROUP BY album, artista
  ORDER BY seguidores DESC, artista ASC, album ASC;
