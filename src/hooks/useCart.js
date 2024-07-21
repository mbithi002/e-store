import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userConfig from "../appwrite/userConfig";

const useCart = () => {
  const { userData } = useSelector((state) => state.auth);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      if (userData && userData.$id) {
        try {
          const res = await userConfig.getCart(userData.$id);
          setCart(res.cart);
        } catch (error) {
          console.log(error.message);
        }
      }
    };

    getCart();
  }, [userData]);

  return cart;
};

export default useCart;
