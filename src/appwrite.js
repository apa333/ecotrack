import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("YOUR_PROJECT_ID"); // from Appwrite Cloud

export const account = new Account(client);
export const databases = new Databases(client);
export { client };
