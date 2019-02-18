sql_order={
    "get_ticket":"select t.tname,a.adult_introduce,a.adult_price from scenic_spotty as t inner JOIN ticket as a on t.tid=a.scenic_id where t.tid={tid}",
}