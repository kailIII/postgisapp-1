# postgisapp
Pruebas con Postgres, Postgis y node.js

Instalación:
------------
Una vez hecho el clone del repo
git clone https://github.com/carpoolinguca/postgisapp.git

Se necesita tener instalado:
npm install supervisor -g

dentro de la carpeta postgisapp ejecutar
npm install

Se necesita tener creada la base de datos de viajes.
Nos logueamos como usuario postgres
su postgres

Desde el usuario de postgres ejecutamos:
createdb -O carpooling -E UTF8 viajes

API REST
--------

GET todas las rutas
http://localhost:3000/api/v1/todos

POST una ruta
curl --data "name=Por Belgrano&geog=LINESTRING(-34.71275 -58.279360000000004,  -34.70375 -58.296440000000004)" http://127.0.0.1:3000/api/v1/todos

UPDATE
curl -X PUT --data "name=Por Belgrano&geog=LINESTRING(-34.71275 -59.279360000000004,  -34.70375 -59.296440000000004)&id=1" http://127.0.0.1:3000/api/v1/todos/1

DELETE
curl -X DELETE http://127.0.0.1:3000/api/v1/todos/2

