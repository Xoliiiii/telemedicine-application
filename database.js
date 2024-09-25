const mysql = require('mysql')

const connection = mysql.createConnection(
    {
        host: 'localhost',
        username: 'root',
        password: 'databaseDEVELOPMENT123!',
        database: 'hospital_db'
    }
);

connection.createQuery((error) => {
    if (error){
        console.log('Unsuccessful connection')
    }else{
        console.log('Successful connection')
    }
});