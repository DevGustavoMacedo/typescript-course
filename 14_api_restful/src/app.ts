// ENV variables
require('dotenv').config()

import express from 'express'
import config from 'config'
import router from './routes'
import db from '../config/db'
import Logger from '../config/logger'
import morganMiddleware from './middlewares/morgan'

const app = express()

// morgan middleware
app.use(morganMiddleware)

// JSON midleware
app.use(express.json())

// router middleware
app.use('/api/', router)

// port
const port = config.get<string>('port')

app.listen(port, async () => {
  Logger.info('Listening o port ' + port)
  
  // Banco de dados
  await db()
})

