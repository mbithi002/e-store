import { Client, Databases, ID, Query } from 'appwrite'
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
      const response = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteProductsCid
      )
      return response
    } catch (error) {
      console.log('userConfig :: getAllProducts() :: ', error)
      throw error
    }
  }

  async createAddress(userId, name, phone, pickUpStation, def) {
    try {
      const response = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUserAddressesCid,
        ID.unique(),
        {
          userId: userId,
          pickUpStation: pickUpStation,
          default: def,
          name: name,
          phone: phone,
        }
      )
      return response
    } catch (error) {
      console.log('userConfig :: createAddress() :: ', error)
      throw error
    }
  }

  async getAddress(userId) {
    try {
      const response = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUserAddressesCid,
        [Query.equal('userId', userId)]
      )
      return response
    } catch (error) {
      console.log('userConfig :: getAddress() :: ', error)
      throw error
    }
  }

  async deleteAddress(documentId) {
    try {
      const response = await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUserAddressesCid,
        documentId
      )
      return response
    } catch (error) {
      console.log('userConfig :: deleteAddress() :: ', error)
      throw error
    }
  }
}

const userConfig = new UserConfig()

export default userConfig
