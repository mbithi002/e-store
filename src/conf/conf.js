const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECTID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASEID),
  appwriteCartCid: String(import.meta.env.VITE_APPWRITE_CART_CID),
  appwriteReviewsCid: String(import.meta.env.VITE_APPWRITE_CART_CID),
  appwriteOrderItemsCid: String(import.meta.env.VITE_APPWRITE_ORDERITEMS_CID),
  appwriteOrdersCid: String(import.meta.env.VITE_APPWRITE_ORDERS_CID),
  appwriteCategoriesCid: String(import.meta.env.VITE_APPWRITE_CATEGORIES_CID),
  appwriteProductsCid: String(import.meta.env.VITE_APPWRITE_PRODUCTS_CID),
  appwriteUsersCid: String(import.meta.env.VITE_APPWRITE_USERS_CID),
};

export default conf;
