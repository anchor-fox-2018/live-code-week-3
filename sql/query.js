QUERY 1 (SOAL 1)

SELECT id, name, birthdate
FROM customers
ORDER BY birthdate ASC;

QUERY 2
SELECT strftime('%Y', birthdate) as YEAR
FROM customers

QUERY 3
SELECT id, name, birthdate, strftime('%Y', 'now') - strftime('%Y', birthdate) as YEAR
FROM customers
ORDER BY birthdate ASC;

QUERY 4 (SOAL 2)
