SELECT transactions.customer_id, customers.name, products.name, products.price, transactions.qty, transactions.subtotal
FROM transactions
JOIN customers
	ON transactions.customer_id = customers.id
JOIN products
	ON transactions.product_id = products.id