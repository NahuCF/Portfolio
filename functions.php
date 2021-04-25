<?php 

function connect_to_database($db_config)
{
    try
    {
        $conection = new PDO("mysql:host=localhost;dbname=" . $db_config["db_name"], $db_config["user"], $db_config["password"]);
        return $conection;
    }
    catch(PDOexception $e)
    {
        return false;
    }
}

?>