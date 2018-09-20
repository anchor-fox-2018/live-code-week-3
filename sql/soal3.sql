SELECT products.id, products.name, SUM(transactions.qty) AS total_penjualan
FROM products
LEFT JOIN transactions
	ON products.id = transactions.product_id
GROUP BY transactions.product_id;