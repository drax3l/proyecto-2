import pg from 'pg';
const {client}=pg;

const config={
    user: examen_proyect_user,
    host: dpg-ctpsngggph6c73dhfctg-a.oregon-postgres.render.com,
    database: examen_proyect,
    password: QcCYzjKmvHIaFIdVVOJMFZPLpd7cMxXt,
    port: 5432,
    ssl: {
        rejectUnauthorized:false
    }
}

async function conectar(params) {
    const cliente = new client(config)
    try{

        await cliente.connect()
        console.log("conectado a la base de datos")
    }catch{

    }
}