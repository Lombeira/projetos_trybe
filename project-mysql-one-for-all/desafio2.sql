SELECT COUNT(DISTINCT song_id) AS cancoes, 
 COUNT(DISTINCT artists.artist_id) AS artistas, 
 	COUNT(DISTINCT albums.album_id) AS albuns 
     FROM SpotifyClone.songs
     INNER JOIN SpotifyClone.artists AS artists
	   INNER JOIN SpotifyClone.albums AS albums;
