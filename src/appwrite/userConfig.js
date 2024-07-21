import { Client, Databases } from "appwrite";
import conf from "../conf/conf";

class UserConfig {
  client = new Client();
  database;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
  }

  async getCart(userId) {
    try {
      const res = await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUsersCid,
        userId
      );
      return res;
    } catch (error) {
      console.log("userConfig :: getCart() :: ", error);
      throw error;
    }
  }
}

const userConfig = new UserConfig();

export default userConfig;
