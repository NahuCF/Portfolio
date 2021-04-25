<?php

require "admin/config.php";
require "functions.php";

header("Content-Disposition: attachment");
header("Content-Type: application/pdf; charset=utf-8");

$conection = connect_to_database($db_config);
if(!$conection)
{
    header("Location: error");
}

$statement = $conection->query("SELECT * FROM CV WHERE ID = 1");
$CV = $statement->fetch();

echo $CV["data"];

?>