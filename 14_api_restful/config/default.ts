const port = process.env.PORT
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const env = process.env.DEVELOPMENT

export default {
  port,
  env,
  dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.csxoahh.mongodb.net/?retryWrites=true&w=majority`,
}