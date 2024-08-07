import { Client, Databases, ID, Query } from 'appwrite'
import bcrypt from 'bcryptjs'
import conf from '../conf/conf'

class AdminConfig {
  client = new Client()
  database

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.database = new Databases(this.client)
  }

  async createUser({ name, email, phone, password }) {
    try {
      const users = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        [Query.equal('email', email), Query.equal('phone', Number(phone))]
      )

      if (users.total > 0) {
        throw new Error('A user with the same email or phone already exists')
      }

      const userId = ID.unique()
      const hashedPassword = await bcrypt.hash(
        String(password),
        conf.bcryptSaltRounds
      )
      console.log(hashedPassword)

      const user = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId,
        { name, email, phone: Number(phone), password: hashedPassword }
      )

      return user
    } catch (error) {
      console.log('adminConfig :: createUser() :: ', error)
      throw error
    }
  }

  async createProduct(
    productName,
    productPrice,
    productImage,
    productDescription,
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
      const response = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductsCid,
        ID.unique(),
        {
          productName,
          productPrice,
          productImage,
          productDescription,
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
      const response = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid
      )
      return response.documents
    } catch (error) {
      console.log('adminConfig :: getAllUsers() :: ', error)
      throw error
    }
  }

  async createCategory(category, description) {
    try {
      const response = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCategoriesCid,
        ID.unique(),
        {
          category,
          description,
        }
      )
      return response
    } catch (error) {
      console.log('adminConfig :: createCategory() :: ', error)
      throw error
    }
  }

  async getCategories() {
    try {
      const response = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCategoriesCid
      )
      return response.documents
    } catch (error) {
      console.log('adminConfig :: getCategories() :: ', error)
      throw error
    }
  }
}

const adminConfig = new AdminConfig()

export default adminConfig
