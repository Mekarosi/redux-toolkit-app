import CartItem from "./CartItem"
import { useSelector } from "react-redux"

const CartContainer = () => {
    const {cartItems, amount, total } = useSelector((state) => state.cart)
  return (
    <div>CartContainer</div>
  )
}

export default CartContainer