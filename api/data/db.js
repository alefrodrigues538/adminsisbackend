

async function connect(){
    if(globalThis.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root@localhost:3306/db_adminsis");

    console.log("Conectado ao banco de dados!");
    global.connection = connection;
    return connection;
}

//select
async function selectClientes(){
    const conn = await dbConnect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    console.log(rows);
    return rows;
}

//insert
async function insertCliente( cliente ){
    const conn = await dbConnect();
    const sql = 'INSERT INTO clientes(nome, sobrenome, idade) VALUES(?, ?, ?);'
    const values = [cliente.nome, cliente.sobrenome, cliente.idade];
    const result = conn.query(sql, values);
    console.log(result);
}

//update
async function updateCliente( cliente ){
    const conn = await dbConnect();
    const sql = 'UPDATE clientes SET nome =?, sobrenome=?, idade=? WHERE id=?;';
    const values = [cliente.nome, cliente.sobrenome, cliente.idade, cliente.id];
    const result = conn.query(sql,values);
    console.log(result);
}

//delete
async function deleteCliente( id ){
    const conn = await dbConnect();
    const sql = 'DELETE FROM clientes WHERE id=?;'
    const values = [id];
    const result = conn.query(sql, values);
    console.log(result);
}

module.exports = {connect, selectClientes, insertCliente, updateCliente, deleteCliente }