<?
$user_name = 'localUser';
$user_password = '123qweasd';
$database_name = 'ardqz';
$server_name = '127.0.0.1';

$conexion_start = mysql_connect($server_name, $user_name, $user_password) or die(mysql_error()); 
mysql_select_db($database_name, $conexion_start) or die(mysql_error()); 
?>