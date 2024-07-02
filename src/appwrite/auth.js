import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account;
  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId
    );
    this.account = new Account(this.Client);
  }

 async createAccount({ email, password, name }) {
  try {
    console.log("Creating account with:", { email, password, name });
    const userAccount = await this.account.create(
      ID.unique(),  // Unique identifier for the user
      email,        // User's email
      password,     // User's password
      name          // User's name (optional)
    );
    if (userAccount) {
      // Call another method
      console.log("accounte created",userAccount);
      return this.login({ email, password });
    } else {
      return userAccount;
    }
  } catch (error) {
    console.log("error creating account",error);
  }
}

  async login({ email, password }) {
    try {
      
      return await this.account.createEmailSession(email, password);
     
    } catch (Error) {
      console.log(Error);
    }
  }
  

  async getCorrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite servie:: getcorrentuser::errror", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite ,logout error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
