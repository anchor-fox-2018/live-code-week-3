//soal 1
SELECT id, name, (strftime('%Y', 'now') - strftime('%Y', birthdate)) - (strftime('%m-%d', 'now') < strftime('%m-%d', birthdate)) AS Age
FROM customers
ORDER BY age DESC;

//soal 2
SELECT transactions.customer_id, customers.name, products.name, products.price, transactions.qty
FROM transactions
LEFT JOIN customers
ON transactions.customer_id = customers.id
LEFT JOIN products
ON products.id = transactions.product_id
ORDER BY transactions.subtotal DESC

//soal 3
SELECT products.id, products.name, transactions.qty
FROM products
LEFT JOIN transactions
ON products.id = transactions.product_id
ORDER BY transactions.qty DESC
