# postgisapp
Pruebas con Postgres, Postgis y node.js

GET todas las rutas
http://localhost:3000/api/v1/todos

POST una ruta
curl --data "name=Por Belgrano&geog=LINESTRING(-34.71275 -58.279360000000004,  -34.70375 -58.296440000000004)" http://127.0.0.1:3000/api/v1/todos

