<?php

$mysqliConect=new mysqli($"localhost", $"root", "", $"sistema_votacion");
if (!$mysqliConect) {
    echo "Error de conexión a la base de datos: ";
  }


    $nombreapellido = $_POST["nombreapellido"];
    $alias = $_POST["alias"];
    $RUT = $_POST["RUT"];
    $email = $_POST["email"];
    $region = $_POST["region"];
    $comuna = $_POST["comuna"];
    $candidato = $_POST["candidato"];
    $comoSeEntero = implode(", ", $_POST["como_se_entero"]);


    $insertar = "insert into datos (nombreapellido, alias, rut, email, region, comuna, candidato, como_se_entero) VALUES("$nombreapellido","$alias","$RUT","$email","$region","$comuna","$candidato";"$comoSeEntero")";
    if (mysqli_query($mysqliConect, $insertar)){
      echo "";
    }else{
      echo "Error al guardar Datos";
    }

    
?>
