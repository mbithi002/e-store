import { Client, Databases, ID, Query } from 'appwrite'
import bcrypt from 'bcryptjs'
import conf from '../conf/conf'

class UserService {
  client = new Client()
  database

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.database = new Databases(this.client)
  }

  async createPhoneAccount(phone) {
    try {
      const userId = ID.unique()
      await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId,
        { phone: Number(phone), userId }
      )
      return userId
    } catch (error) {
      console.log('userService :: createPhoneAccount() :: ', error)
      throw error
    }
  }

  async loginPhone(userId, secret) {
    try {
      const user = await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId
      )
      if (user && user.secret === secret) {
        const sessionId = ID.unique()
        localStorage.setItem(
          'session',
          JSON.stringify({ userId: user.$id, sessionId })
        )
        return { userId: user.$id, sessionId }
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      console.log('userService :: loginPhone() :: ', error)
      throw error
    }
  }
  async createEmailAccount({ name, email, phone, password }) {
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
      const user = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId,
        { name, email, phone: Number(phone), password: hashedPassword }
      )

      if (user) {
        const sessionId = ID.unique()
        localStorage.setItem(
          'session',
          JSON.stringify({ userId: user.$id, sessionId })
        )
      }

      return user
    } catch (error) {
      console.log('userService :: createEmailAccount() :: ', error)
      throw error
    }
  }

  async loginEmail({ email, password }) {
    try {
      const users = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        [Query.equal('email', email)]
      )

      if (users.total > 0) {
        const user = users.documents[0]
        const isMatch = await bcrypt.compare(String(password), user.password)

        if (isMatch) {
          const sessionId = ID.unique()
          localStorage.setItem(
            'session',
            JSON.stringify({ userId: user.$id, sessionId })
          )
          return { userId: user.$id, sessionId }
        } else {
          throw new Error('Invalid credentials')
        }
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      console.log('userService :: loginEmail() :: ', error)
      throw error
    }
  }

  async logout() {
    try {
      localStorage.removeItem('session')
      return { success: true }
    } catch (error) {
      console.log('userService :: logout() :: ', error)
      throw error
    }
  }

  async getCurrentUser() {
    try {
      const session = JSON.parse(localStorage.getItem('session'))
      if (session) {
        const user = await this.database.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteUsersCid,
          session.userId
        )
        return user
      } else {
        throw new Error('No session found')
      }
    } catch (error) {
      console.log('userService :: getCurrentUser() :: ', error)
      throw error
    }
  }

  isLoggedIn() {
    const session = localStorage.getItem('session')
    return !!session
  }
}

const userService = new UserService()

export default userService

// import { Account, Client, Databases, ID } from 'appwrite'
// import conf from '../conf/conf'

// class UserService {
//   client = new Client()
//   account
//   database

//   constructor() {
//     this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
//     this.account = new Account(this.client)
//     this.database = new Databases(this.client)
//   }

//   async createPhoneAccount(phone) {
//     try {
//       const token = await this.account.createPhoneToken(ID.unique(), phone)
//       if (token) {
//         const userId = token.userId
//         return userId
//       }
//     } catch (error) {
//       console.log('appwriteUserService :: createPhoneAccount() :: ', error)
//       throw error
//     }
//   }

//   async loginPhone(userId, secret) {
//     try {
//       const session = await this.account.createSession(userId, secret)
//       if (session) {
//         return session
//       }
//     } catch (error) {
//       console.log('appwriteUserService :: loginPhone() :: ', error)
//       throw error
//     }
//   }
//   async createEmailAccount({ name, email, phone, password }) {
//     try {
//       const response = await this.account.create(
//         ID.unique(),
//         email,
//         password,
//         name
//       )

//       if (response) {
//         await this.account.createEmailPasswordSession(email, password)

//         const userId = response.$id
//         await this.database.createDocument(
//           conf.appwriteDatabaseId,
//           conf.appwriteUsersCid,
//           userId,
//           {
//             phone: Number(phone),
//             name: name,
//             email: email,
//             userId: userId,
//           }
//         )
//         return response
//       }
//     } catch (error) {
//       console.log('appwriteUserService :: createEmailAccount() :: ', error)
//       throw error
//     }
//   }

//   async loginEmail({ email, password }) {
//     try {
//       const session = await this.account.createEmailPasswordSession(
//         email,
//         password
//       )
//       if (session) {
//         return session
//       }
//     } catch (error) {
//       console.log('appwriteUserService :: loginEmail() :: ', error)
//       throw error
//     }
//   }

//   async logout() {
//     try {
//       const response = await this.account.deleteSessions()
//       if (response) {
//         return response
//       }
//     } catch (error) {
//       console.log('appwriteUserService :: logout() :: ', error)
//       throw error
//     }
//   }

//   async getCurrentUser() {
//     try {
//       const response = await this.account.get()
//       if (response) {
//         return response
//       }
//     } catch (error) {
//       console.log('appwriteUserService :: getCurrentUser() :: ', error)
//       throw error
//     }
//   }
// }

// const userService = new UserService()

// export default userService
