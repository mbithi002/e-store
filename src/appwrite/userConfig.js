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

  async createAddress({
    userId,
    defaultAddress,
    name,
    phone,
    county,
    town,
    location,
  }) {
    try {
      const checkDefault = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUserAddressesCid,
        [Query.equal('userId', userId), Query.equal('defaultAddress', true)]
      )

      if (checkDefault.documents.length > 0) {
        const updateDefault = await this.database.updateDocument(
          conf.appwriteDatabaseId,
          conf.appwriteUserAddressesCid,
          checkDefault.documents[0].$id,
          {
            defaultAddress: false,
          }
        )
        console.log(updateDefault)
      }
      const response = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUserAddressesCid,
        ID.unique(),
        {
          userId,
          defaultAddress,
          name,
          phone,
          county,
          town,
          location,
        }
      )
      return response
    } catch (error) {
      console.log('userConfig :: createAddress() :: ', error)
      throw error
    }
  }

  async getAddresses(userId) {
    try {
      const response = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUserAddressesCid,
        [Query.equal('userId', userId)]
      )
      return response.documents
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
      console.log(response)
      return response
    } catch (error) {
      console.log('userConfig :: deleteAddress() :: ', error)
      throw error
    }
  }

  async getDefaultAddress(userId) {
    try {
      const response = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUserAddressesCid,
        [Query.equal('userId', userId), Query.equal('defaultAddress', true)]
      )
      return response.documents[0]
    } catch (error) {
      console.log('userConfig :: getDefaultAddress() :: ', error)
      throw error
    }
  }

  async updateAccount({ documentId, name, phone, email }) {
    try {
      const response = await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        documentId,
        {
          name,
          email,
          phone,
        }
      )
      console.log(response)
      return response
    } catch (error) {
      console.log('userConfig :: updateAccount() :: ', error)
      throw error
    }
  }

  async createOrder(userId, totalAmount, items, address, orderId) {
    try {
      const response = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOrdersCid,
        orderId,
        {
          userId,
          totalAmount,
          items,
          address,
        }
      )
      return response
    } catch (error) {
      console.error('OrderService :: createOrder() :: ', error)
      throw error
    }
  }

  async createOrderItem(item, orderId) {
    try {
      const response = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOrderItemsCid,
        ID.unique(),
        {
          orderId,
          item,
        }
      )
      return response
    } catch (error) {
      console.error('OrderService :: createOrderItem() :: ', error)
      throw error
    }
  }
  async getOrders(userId) {
    try {
      const response = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteOrdersCid,
        [Query.equal('userId', userId)]
      )
      return response.documents
    } catch (error) {
      console.log('userConfig :: getOrders() :: ', error)
      throw error
    }
  }
}

const userConfig = new UserConfig()

export default userConfig
