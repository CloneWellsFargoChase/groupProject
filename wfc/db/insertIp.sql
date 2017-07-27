insert into ips (ip, time)
values($1, $2)
returning *
