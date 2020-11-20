const db = require('../data/db');

exports.get = async ( req, res, next)=>{
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM clientes');
    console.log(rows);
    res.status(201).json(rows);
};

exports.post = ( req, res, next)=>{
    console.log(req.body)
    res.status(201).send('Requisição recebida com sucesso!');
};

exports.put = ( req, res, next)=>{
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next)=>{
    let id = req.params.id;
    res.status(200).send(`Rquisição recebida com sucesso! ${id}`);
}