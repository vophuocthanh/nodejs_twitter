import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = 'mongodb+srv://phuocthanh2k03:phuocthanh123@twitter.bebqcbd.mongodb.net/?retryWrites=true&w=majority'
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export class DatabaseServer {
  private client: MongoClient
  constructor() {
    this.client = new MongoClient(uri)
  }
  connect() {
    try {
      // Send a ping to confirm a successful connection
      this.client.db('admin').command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } finally {
      // Ensures that the client will close when you finish/error
      this.client.close()
    }
  }
}
