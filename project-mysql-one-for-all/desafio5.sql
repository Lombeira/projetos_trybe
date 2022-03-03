SELECT songs.song_name AS cancao,
  COUNT(reproduction_history.song_id) AS reproducoes
	FROM SpotifyClone.songs AS songs
    INNER JOIN SpotifyClone.reproduction_history AS reproduction_history
     ON reproduction_history.song_id = songs.song_id
     GROUP BY song_name
      HAVING reproducoes > 1
     LIMIT 2;
