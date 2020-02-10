SELECT city, mood FROM destinations d JOIN city_preferences cp ON d.id = cp.city_id JOIN preferences p ON preference_id = p.id;

SELECT activity, category, min_cost, max_cost FROM themes t JOIN budgets b ON t.budget_id = b.id;

SELECT mood, category FROM preferences p JOIN age_preferences a ON a.preference_id = p.id JOIN age_groups ag ON a.age_id = ag.id;

SELECT mood, category, activity FROM preferences p JOIN age_preferences a ON a.preference_id = p.id JOIN age_groups ag ON a.age_id = ag.id JOIN themes t on a.theme_id = t.id;

SELECT city, mood, category, activity FROM preferences p JOIN age_preferences a ON a.preference_id = p.id JOIN age_groups ag ON a.age_id = ag.id JOIN themes t ON a.theme_id = t.id JOIN city_preferences c ON c.preference_id = p.id JOIN destinations d ON c.city_id = d.id;
