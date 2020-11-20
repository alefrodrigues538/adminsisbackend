
(async () => {
    const db = require("./config/database/db");
    console.log('começou');
    
    await db.insertCliente({nome:'Alef', sobrenome:'Fernando', idade:26});
    await db.selectClientes();
    await db.updateCliente({nome:'Alef', sobrenome:'Rodrigues', idade:26, id:6});
    await db.selectClientes();
    await db.deleteCliente(8);
    await db.selectClientes();
})();