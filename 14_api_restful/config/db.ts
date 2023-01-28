import mongoose from "mongoose"
import config from "config"
import Logger from "./logger"

async function connect() {
  const dbUri = config.get<string>('dbUri')

  try {
    await mongoose.connect(dbUri)

    Logger.info('MongoDB conectado')

  } catch (error) {
    Logger.error('Não foi possível conectar: ' + error)
    process.exit(1)
  }
}

export default connect