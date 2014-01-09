<?
include_once('conexion.php');	
$sql = "SELECT description FROM sections where status = 1 AND id = ". $_GET['params'];
$rs = mysql_query($sql) or die("CAN'T EXECUTE QUERY -> ".mysql_error());
#$filas = mysql_fetch_array($rs) or die(" No se pudo meter en el array ".mysql_error());
#return $filas;
while($file = mysql_fetch_array($rs)){
	$resultado[]= $file;
}
print_r(json_encode($resultado));
return json_encode($resultado);
?>