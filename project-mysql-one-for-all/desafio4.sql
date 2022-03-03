SELECT users.user_name AS usuario,
  IF(MAX(YEAR(reproduction_history.reproduction_date)) = 2021, 'Usuário ativo', 'Usuário inativo')
   AS condicao_usuario
    FROM SpotifyClone.users AS users
    INNER JOIN SpotifyClone.reproduction_history AS reproduction_history
     ON users.user_id = reproduction_history.user_id
    GROUP BY user_name;
