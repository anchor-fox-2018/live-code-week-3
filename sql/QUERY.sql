-- SOAL 1
SELECT id, name, date('now') - strftime('%Y',birthdate) AS age FROM customers 
-- SOAL 2
SELECT 	customers.id,
		customers.name AS customer_name,
		products.name,
		products.price,
		transactions.qty,
		transactions.subtotal,
		transactions.qty * transactions.subtotal AS total_price
FROM 
		customers,
		transactions,
		products 
WHERE 
		customers.id = transactions.customer_id
ORDER BY 
		total_price DESC
		
-- SOAL 3
SELECT 
		products.id, 
		products.name, 
		transactions.qty  
FROM 
		products, 
		transactions
WHERE
		products.id = transactions.product_id
ORDER BY
		transactions.qty DESC