
var crud = module.exports = {};
var pg = require('pg');
var postgis = require('pg-postgis-types');
var connectionString = process.env.DATABASE_URL || 'postgres://carpooling:carpooling@localhost:5432/viajes';

function items(client,res,done){

		var results = [];

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM rutas;");

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });

};

crud.create = function(data,res){

	// Get a Postgres client from the connection pool

    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        
        // SQL Query > Insert Data
        var sql = "INSERT INTO rutas(name, geog) values($1, ST_GeographyFromText('"+ data.geog + "'))";
        console.log(sql);
        client.query(sql, [data.name]);

    items(client, res, done);

    });
};

crud.read = function(res){

	// Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        items(client, res, done);
    });
};

crud.update = function(data,res){

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).send(json({ success: false, data: err}));
        }

        // SQL Query > Update Data
        client.query("UPDATE rutas SET name=($1), geog=($2) WHERE id=($3)", [data.name, data.geog, data.id]);

		items(client, res, done);

	});
};

crud.delete = function(id,res){

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // SQL Query > Delete Data
        client.query("DELETE FROM rutas WHERE id=($1)", [id]);

        items(client, res, done);
    });
};

