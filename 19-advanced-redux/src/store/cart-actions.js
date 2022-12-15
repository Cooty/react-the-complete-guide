import { actions as uiActions } from "./ui-slice";
import { actions as cartActions } from "./cart-slice";
import { FIREBASE_URL } from "../config/api";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(`${FIREBASE_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          itemCount: cart.itemCount,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send cart data! :(");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data is updated",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: e.message,
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`${FIREBASE_URL}/cart.json`);
      if (!response.ok) {
        throw new Error("Couldn't fetch cart data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replace({
          items: cartData && cartData.items ? cartData.items : [],
          itemCount: cartData && cartData.itemCount ? cartData.itemCount : 0,
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: e.message,
        })
      );
    }
  };
};
