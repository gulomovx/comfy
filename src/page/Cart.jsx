import { useSelector, useDispatch } from "react-redux";
import { editItem, removeItem, clearCart } from "../features/cart/cartSlice";
import { generateAmountoptions } from "../utils/index";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/index";

function Cart() {
  const { cartItems, cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  const dispatch = useDispatch();
  if (cartItems.length === 0) {
    return (
      <div className="border-b border-base-300 pb-5 py-20">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Your cart is empty
        </h2>
      </div>
    );
  }
  return (
    <section className="py-20">
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Shopping Cart
        </h2>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row gap-x-12">
        <div className="grow">
          {cartItems &&
            cartItems.map((item) => {
              return (
                <div
                  key={item.cartID}
                  className="flex flex-col gap-y-4 mb-12 border-b border-base-300 last:border-b-0 pb-6 sm:flex-row"
                >
                  <img
                    src={item.image}
                    alt={`${item.title} image`}
                    className="h-24 w-24 object-cover sm:h-32 sm:w-32 rounded-lg"
                  />
                  <div className="sm:ml-16 sm:w-48">
                    <h3 className="font-medium capitalize">{item.title}</h3>
                    <h4 className="mt-2 capitalize text-sm text-neutral-content ">
                      {item.company}
                    </h4>
                    <div className="mt-4 flex text-sm items-center gap-2">
                      Color:{" "}
                      <span
                        className="badge badge-sm"
                        style={{ background: item.productColor }}
                      ></span>
                    </div>
                  </div>
                  <div className="form-control max-w-xs sm:ml-12 sm:items-center">
                    <label className="label p-0">
                      <span className="label-text capitalize">amount</span>
                    </label>
                    <select
                      id="amount"
                      value={item.amount}
                      className="mt-2 select select-base-300 select-bordered select-xs"
                      onChange={(e) =>
                        dispatch(
                          editItem({
                            cartID: item.cartID,
                            amount: parseInt(e.target.value),
                          })
                        )
                      }
                    >
                      {generateAmountoptions(20)}
                    </select>
                    <button
                      onClick={() =>
                        dispatch(removeItem({ cartID: item.cartID }))
                      }
                      className="mt-2 link link-primary link-hover text-sm text-left"
                    >
                      remove
                    </button>
                  </div>
                  <p className="font-medium sm:ml-auto">
                    {formatPrice(item.price)}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col gap-y-10 grow-0 basis-80 font-medium">
          <div className="card bg-base-200">
            <div className="card-body">
              <p className="flex  justify-between text-xs border-b border-base-300 pb-2">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </p>
              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Tax</span>
                <span>{formatPrice(tax)}</span>
              </p>
              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Shipping</span>
                <span>{formatPrice(shipping)}</span>
              </p>
              <p className="flex justify-between text-sm pb-2 mt-5">
                <span>Order Total</span>
                <span>{formatPrice(orderTotal)}</span>
              </p>
            </div>
          </div>
          <Link to="/login" className="btn btn-primary">
            please login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;