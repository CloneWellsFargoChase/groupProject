select * from transactions
where date = $1
and amount = $2
and userid = $3
