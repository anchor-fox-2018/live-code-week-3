SELECT id, name, strftime('%Y', 'now') - strftime('%Y', birthdate) as Age
FROM customers
ORDER BY birthdate ASC;