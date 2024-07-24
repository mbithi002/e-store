import { Client, Databases } from 'appwrite'
import conf from '../conf/conf'

class UserConfig {
  client = new Client()
  database

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.database = new Databases(this.client)
  }

  async getAllProducts() {
    try {
      const res = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteProductsCid
      )
      return res
    } catch (error) {
      console.log('userConfig :: getAllProducts() :: ', error)
      throw error
    }
  }

  async getCart(userId) {
    try {
      const res = await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId
      )
      return res.cart
    } catch (error) {
      console.log('userConfig :: getCart() :: ', error)
      throw error
    }
  }

  async addItemToCart(userId, productId) {
    try {
      console.log('productId>>>', productId)
      const userDoc = await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId
      )

      const updatedCart = [...userDoc.cart, String(productId)]

      await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId,
        { cart: updatedCart }
      )

      return updatedCart
    } catch (error) {
      console.log('userConfig :: addItemToCart() :: ', error)
      throw error
    }
  }

  async deleteItemFromCart(userId, productId) {
    try {
      const userDoc = await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId
      )

      const updatedCart = userDoc.cart.filter((item) => item !== productId)

      await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId,
        { cart: updatedCart }
      )

      return updatedCart
    } catch (error) {
      console.log('userConfig :: deleteItemFromCart() :: ', error)
      throw error
    }
  }

  async clearCart(userId) {
    try {
      const res = await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId,
        {
          cart: [],
        }
      )
      return res
    } catch (error) {
      console.log('userConfig :: clearCart() :: ', error)
      throw error
    }
  }
}

const userConfig = new UserConfig()

export default userConfig
