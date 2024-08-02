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
    productTags
  ) {
    try {
      const response = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductsCid,
        ID.unique(),
        {
          productName: productName,
          productPrice: productPrice,
          productImage: productImage,
          productDescription: productDescription,
          categoryId: categoryId,
          productQuantity: productQuantity,
          productStatus: productStatus,
          productRating: productRating,
          productReviews: productReviews,
          productTags: productTags,
        }
      )
      return response
    } catch (error) {
      console.log('adminConfig :: createProduc() :: ', error)
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
