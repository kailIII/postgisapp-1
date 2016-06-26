//createdb -O carpooling -E UTF8 viajes
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://carpooling:carpooling@localhost:5432/viajes';

var client = new pg.Client(connectionString);
client.connect();
var query1 = client.query('CREATE EXTENSION POSTGIS');
var query2 = client.query('CREATE TABLE rutas ( id serial primary key, name varchar(20) , geog geography(LINESTRING) )');
query1.on('end',function(){query2.on('end', function() { client.end(); })});
console.log('Table rutas created.');
