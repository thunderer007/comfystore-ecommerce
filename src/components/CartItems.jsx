import { formatPrice, generateAmountOptions } from "../utils";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  return (
    <article
      key={cartID}
      className="flex flex-col mb-12 gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* COMPANY */}
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        {/* COLOUR */}
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          colour:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24">
        {/* AMOUNT */}
        <div className="form-control max-w-xl">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}
            className="mt-2 select select-base select-bordered selet-xs"
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
        {/* REMOVE */}
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
      {/* PRICE */}
    </article>
  );
};

export default CartItems;
