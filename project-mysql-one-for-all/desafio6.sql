SELECT 
 MIN(plan_options.plan_value) AS 'faturamento_minimo',
 MAX(plan_options.plan_value) AS 'faturamento_maximo',
 CAST((AVG(plan_options.plan_value)) AS DECIMAL(4,2)) AS 'faturamento_medio',
 CAST((SUM(plan_options.plan_value)) AS DECIMAL(4,2)) AS 'faturamento_total'
  FROM SpotifyClone.users AS users
  INNER JOIN SpotifyClone.plan_options AS plan_options
   ON plan_options.plan_id = users.user_plan;
