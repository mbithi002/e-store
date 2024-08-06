import { Client, Databases, ID } from 'appwrite'
import conf from '../conf/conf'

class AdminConfig {
  client = new Client()
  databases

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client)
  }

  async createProduct(
    productName,
    productPrice,
    productImage,
    productDescription,
    categoryId,
    productQuantity,
    productStatus,
    productRating,
    productReviews,
    productTags,
    category,
    featured,
    isNew
  ) {
    try {
      const response = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductsCid,
        ID.unique(),
        {
          productName,
          productPrice,
          productImage,
          productDescription,
          categoryId,
          productQuantity,
          productStatus,
          productRating,
          productReviews,
          productTags,
          category,
          featured,
          isNew,
        }
      )
      return response
    } catch (error) {
      console.log('adminConfig :: createProduct() :: ', error)
      throw error
    }
  }

  async getAllusers() {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid
      )
      return response.documents
    } catch (error) {
      console.log('adminConfig :: getAllUsers() :: ', error)
      throw error
    }
  }
}

const adminConfig = new AdminConfig()

export default adminConfig
