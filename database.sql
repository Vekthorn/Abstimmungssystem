
CREATE DATABASE sistema_votacion;


USE sistema_votacion;


CREATE TABLE registros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_apellido VARCHAR(100) NOT NULL,
  alias VARCHAR(20) NOT NULL,
  rut VARCHAR(12) NOT NULL,
  email VARCHAR(100) NOT NULL,
  region VARCHAR(50) NOT NULL,
  comuna VARCHAR(50) NOT NULL,
  candidato VARCHAR(50) NOT NULL,
  como_se_entero VARCHAR(100) NOT NULL
);
