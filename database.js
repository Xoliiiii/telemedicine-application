const mysql = require('mysql2')

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'databaseDEVELOPMENT123!',
        database: 'hospital_db'
    }
);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// executing query
connection.query('SELECT * FROM patients',(results, err) => {
    if (err) {
        console.error('Error executing query:', err)
        return;
    }

    console.log('Query Results:',results)


    //HAndling results if its a array 

    if (Array.isArray(results)){
        results.forEach((row, index) => {
            console.log(`Row ${index}, row`)
        });
    }

    connection.end();
});

