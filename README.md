Autor: Martín N. Menéndez - 2020
# Introduccion
El proyecto consiste en un sistema de control y visualización de dispositivos hogareños (persianas, luces empotradas y/o elementos conectados a la red eléctrica). Es el trabajo final de la asignatura "Desarrollo de Aplicaciones Web" de la Especialización en Internet de las Cosas (CEIoT) de la Facultad de Ingeniería de la Universidad de Buenos Aires (FIUBA)

# Correr la aplicación con docker-compose

## Para correr la aplicación es necesario ejecutar en la carpeta deseada:

```sh
git clone https://github.com/Martin-N-Menendez/daw_tp_final
```

y luego en la misma carpeta ejecutar:

```sh
docker-compose up
```
ACLARACION IMPORTANTE: Docker esta implementado con "VALVULAS". Es necesario esperar que el sistema "caliente" antes de abrir la web, de lo contrario, se verá como si no hubiese ningùn dispositivo.

## Para dar de baja el docker-compose se debe ejecutar:

```sh
docker-compose down
```

# Correr la aplicación sin docker-compose

## En Visual Studio Code, para pasar los cógidos de Typescript a JavaScript
```sh
cd src
./compile_ts.sh . ../js
docker stop /ts_compiler
```

## En la terminal
### Cerrar todos los dockers activos
```sh
docker stop $(docker ps -a -q)
```

### Chequear  la red de Docker que se usará para conectar los contenedores entre sí
```sh
docker network ls | grep mysql-net
```

### Si lo anterior no da info
```sh
docker network create --driver bridge mysql-net
```

### Ejecutar contenedor con la DB
```sh
./start_mysql.sh mysql-net "$PWD"/db
```

### Correr gestor de DB PHPMyAdmin conectandolo a la red Docker, el servidor y puerto.
```sh
./run_phpadmin.sh mysql-net mysql-server 8085
```

Y luego verificar en http://localhost:8085

### Ejecutar el servidor de NodeJS con la aplicacion creada con index.js como entry point corriendo en 8000 y sobre la red mysql-net.
```sh
./serve_node_app_net.sh "$PWD" ws/index.js 8000 mysql-net
```

# Contribuir
Para contribuir realizar un pull request con las sugerencias.

Al ser un proyecto autoconclusivo, solo con fines académicos, no tendrá mantenimiento futuro.
# Licencia
GLP
