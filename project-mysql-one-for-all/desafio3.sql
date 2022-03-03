SELECT (users.user_name) AS usuario, 
 COUNT(DISTINCT reproduction_history.song_id) AS qtde_musicas_ouvidas,
  CAST((SUM(songs.song_duration_in_seconds/60)) AS DECIMAL(4,2)) AS total_minutos
   	FROM SpotifyClone.users AS users
    INNER JOIN SpotifyClone.reproduction_history AS reproduction_history
     ON users.user_id = reproduction_history.user_id
    INNER JOIN SpotifyClone.songs as songs
     ON reproduction_history.song_id = songs.song_id
    GROUP BY user_name;
-- https://pt.stackoverflow.com/questions/234741/converter-segundos-em-minutos
-- https://www.ti-enxame.com/pt/mysql/cast-para-decimal-no-mysql/1068058113/
