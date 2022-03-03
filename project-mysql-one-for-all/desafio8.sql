SELECT 
 artists.artist_name AS artista,
 albums.album_name AS album
	FROM SpotifyClone.artists AS artists 
    INNER JOIN SpotifyClone.albums AS albums
     ON albums.artist_id = artists.artist_id
    WHERE artist_name = "Walter Phoenix";
