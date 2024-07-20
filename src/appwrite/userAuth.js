import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

class UserService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createPhoneAccount(phone) {
    try {
      const token = await this.account.createPhoneToken(ID.unique(), phone);
      if (token) {
        const userId = token.userId;
        return userId;
      }
      return false;
    } catch (error) {
      console.log("appwriteUserService :: createPhoneAccount() :: ", error);
      throw error;
    }
  }

  async loginPhone(userId, secret) {
    try {
      const session = await this.account.createSession(userId, secret);
      if (session) {
        return session;
      }
      return false;
    } catch (error) {
      console.log("appwriteUserService :: loginPhone() :: ", error);
      throw error;
    }
  }

  async createEmailAccount(name, email, password) {
    try {
      const response = await this.account.create(
        ID.unique(),
        name,
        email,
        password
      );
      if (response) {
        return response;
      }
      return false;
    } catch (error) {
      console.log("appwriteUserService :: createEmailAccount() :: ", error);
      throw error;
    }
  }

  async loginEmail({ email, password }) {
    try {
      console.log(conf.appwriteUrl);
      console.log(conf.appwriteCartCid);
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (session) {
        return session;
      }
      return false;
    } catch (error) {
      console.log("appwriteUserService :: loginEmail() :: ", error);
      throw error;
    }
  }

  async logout() {
    try {
      const response = await this.account.deleteSessions();
      if (response) {
        return response;
      }
      return false;
    } catch (error) {
      console.log("appwriteUserService :: logout() :: ", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const response = await this.account.get();
      if (response) {
        return response;
      }
      return false;
    } catch (error) {
      console.log("appwriteUserService :: getCurrentUser() :: ", error);
      throw error;
    }
  }
}

const userService = new UserService();

export default userService;
