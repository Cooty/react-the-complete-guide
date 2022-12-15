import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { actions as uiActions } from "../../store/ui-slice";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cart.itemCount);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default CartButton;
