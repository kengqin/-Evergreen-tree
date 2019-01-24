sql_user={
    "addUser":"insert into user(telephone,password,regist_date) values('{telephone}','{password}',CURDATE())",
    "getUserById":"select id,password,telephone,email,regist_date from user where telephone={telephone} limit 1"
}