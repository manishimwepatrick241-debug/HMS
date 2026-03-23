
const mysql =require('mysql2/promise');
const pool=mysql.createPool({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PWASSWORD,
    DATABASE:process.env.DB_DATABASE,
})

pool.getConnection()
.then(connection=>{
    console.log('Database connected successfully');
    connection.release();

})
.catch(err=>{
    console.error('error connecting to database',err);
});

module.export=pool;