export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb+srv://StrikerEureka12:*mongoDB0612@clusterapi.av9rp.mongodb.net/clean-node-api?retryWrites=true&w=majority',
  port: process.env.PORT ?? 5050,
  jwtSecret: process.env.JWT_SECRET ?? 'clean_node_api'
}
