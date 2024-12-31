import pg from 'pg';
const {Client}=pg;

const config={
    user: 'examen_proyect_user',
    host: 'dpg-ctpsngggph6c73dhfctg-a.oregon-postgres.render.com',
    database: 'examen_proyect',
    password: 'QcCYzjKmvHIaFIdVVOJMFZPLpd7cMxXt',
    port: 5432,
    ssl: {
        rejectUnauthorized:false
    }
}

export async function conectar(params) {
    const cliente = new Client(config)
    try{

        await cliente.connect()
        console.log("conectado a la base de datos")
    }catch(error){
        console.log(error)
    }
}

export async function TraerRegistros() {
    const cliente = new Client(config)
    try{
        await cliente.connect()
        const res= await cliente.query('SELECT * FROM curriculum')
        return res.rows
    } catch(error) {
        console.log(error)
    }
}