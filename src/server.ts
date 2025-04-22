import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import dotenv from 'dotenv'

dotenv.config()
const user = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD

const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb')

const app = express()
const port = 3000

const uri = "mongodb+srv://" + user + ":" + password + "@clustertg.nmgazw5.mongodb.net/" 
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

export async function connectToDatabase() {
  try {
    await client.connect()
    //console.log("Connected to MongoDB!")
    return client.db("DB")
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error)
    throw error
  }
}

// Exemplo para buscar dados da coleção 'equipments'
/*app.get('/equipments', async (req: Request, res: Response) => {
  try {
    const database = await connectToDatabase()
    const collection = database.collection('equipments')
    const equipments = await collection.find({}).toArray()
    res.status(200).json(equipments)
    console.log('fa' + equipments)
  } catch (error) {
    console.error('Erro ao buscar dados da coleção equipments:', error)
    res.status(500).json({ error: 'Erro ao buscar dados da coleção equipments' })
  } finally {
    await client.close()
  }
})*/

app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(routes)


app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`)
})