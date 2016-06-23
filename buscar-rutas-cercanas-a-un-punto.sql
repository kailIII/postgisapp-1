
CREATE TABLE rutas ( id serial primary key, name varchar(20) , geog geography(LINESTRING) ) ;

SELECT * FROM rutas;

INSERT INTO rutas (id, name, geog) VALUES
(1, 'Por Belgrano' , ST_GeographyFromText('SRID=4326; LINESTRING(-34.71275 -58.279360000000004,  -34.70375 -58.296440000000004)'));

INSERT INTO rutas (id, name, geog) VALUES
(2, 'Por Cramer' , ST_GeographyFromText('SRID=4326; LINESTRING(-34.71172 -58.27147000000001,  -34.70375 -58.296440000000004)'));

INSERT INTO rutas (id, name, geog) VALUES
(3, 'Por Jose Ingen' , ST_GeographyFromText('SRID=4326; LINESTRING(-34.69896 -58.298320000000004,  -34.70375 -58.296440000000004)'));

SELECT name FROM rutas WHERE ST_DWithin(geog,ST_GeographyFromText('SRID=4326; POINT(-34.713770000000004 -58.288590000000006)'), 1000000);


spatial=# SELECT name FROM rutas WHERE ST_DWithin(geog,ST_GeographyFromText('SRID=4326; POINT(-34.713770000000004 -58.288590000000006)'), 1000000);
      name      
----------------
 Por Belgrano
 Por Jose Ingen
 Por Cramer
(3 rows)

spatial=# SELECT name FROM rutas WHERE ST_DWithin(geog,ST_GeographyFromText('SRID=4326; POINT(-34.713770000000004 -58.288590000000006)'), 300);
 name 
------
(0 rows)

spatial=# SELECT name FROM rutas WHERE ST_DWithin(geog,ST_GeographyFromText('SRID=4326; POINT(-34.713770000000004 -58.288590000000006)'), 500);
     name     
--------------
 Por Belgrano
 Por Cramer
(2 rows)

spatial=# SELECT name FROM rutas WHERE ST_DWithin(geog,ST_GeographyFromText('SRID=4326; POINT(-34.713770000000004 -58.288590000000006)'), 1000);
     name     
--------------
 Por Belgrano
 Por Cramer
(2 rows)

spatial=# SELECT name FROM rutas WHERE ST_DWithin(geog,ST_GeographyFromText('SRID=4326; POINT(-34.713770000000004 -58.288590000000006)'), 400);
     name     
--------------
 Por Belgrano
(1 row)
