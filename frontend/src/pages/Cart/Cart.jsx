import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart, removeItemCart } from "../../Redux/CartReducer/cartAction";

const Cart = () => {
  const dispatch = useDispatch();

  const allCart = useSelector((store) => {
    return store.CartReducer.carts;
    // console.log(store);
  });
  console.log("allCart", allCart);
  const [price, setPrice] = useState(0);
  const [delivery, setDelivery] = useState(40);
  const [total, setTotal] = useState(0);
  console.log("price", price);
  let subtotal = price + delivery;

  useEffect(() => {
    dispatch(getAllCart());
    allCart.map((item) => {
      setPrice(item.price);
      setTotal(item.discountedPrice);
    });
  }, []);

  const removeItemFromCart = (id) => {
    dispatch(removeItemCart(id));
  };

  const buyNow = async () => {
    console.log("payment");

    const paymentData = {
      purpose: "Test payment",
      amount: 10,
    };

    axios
      .post("https://instamojo-test-1s1j.vercel.app/pay", paymentData)
      .then((res) => {
        console.log("res", res.data);
        // window.location.href = res.data;
      })
      .catch((err) => {
        console.log("payment error", err);
      });
  };

  return (
    <>
      <div className="col-10 mx-auto mt-3">
        <div className="row">
          <div className="col-md-8 col-12">
            <div className="card p-3">
              <div className="row">
                <h5>My Cart({allCart.length})</h5>
                <div className="col-12">
                  {allCart &&
                    allCart.slice(0, 5).map((el) => {
                      return (
                        <div key={el.id} className="card p-3 mt-2">
                          <div className="row">
                            <div className="col-2">
                              <img src={el.image} alt="" />
                            </div>
                            <div className="col-10">
                              <h5>{el.productName}</h5>
                              <h5>{el.description}</h5>
                              <p>
                                Price: <del>{el.reviews}</del> <b>{el.price}</b>
                              </p>
                            </div>
                          </div>

                          <div className="row mt-3">
                            <div className="col-md-3 col-12">
                              <div className="input-group">
                                <input
                                  type="button"
                                  value="-"
                                  className="button-minus"
                                  data-field="quantity"
                                />
                                <input
                                  type="number"
                                  step="1"
                                  max=""
                                  value="1"
                                  name="quantity"
                                  className="quantity-field"
                                />
                                <input
                                  type="button"
                                  value="+"
                                  className="button-plus"
                                  data-field="quantity"
                                />
                              </div>
                            </div>
                            <div className="col-md-9 col-12">
                              <button className="btn btn-light w-25 me-2 fw-bold text-secondary">
                                Save for later
                              </button>
                              <button
                                className="btn btn-light w-25 fw-bold text-secondary"
                                onClick={() => removeItemFromCart(el.id)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="col-12 text-end mt-3">
                <button
                  className="btn btn-warning w-25 p-3"
                  onClick={() => buyNow()}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card p-3 shadow border-0">
              <h3 className="mb-3">PRICE DETAILS</h3>
              <div className="row mb-3">
                <div className="col-6">
                  <p>Price (1 item)</p>
                </div>
                <div className="col-6 text-end">{price}</div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <p>Discount</p>
                </div>
                <div className="col-6 text-end"></div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <p>Delivery Charges</p>
                </div>
                <div className="col-6 text-end">{delivery}</div>
              </div>
              <hr />
              <div className="row mb-3 mt-3">
                <div className="col-6">
                  <b>Total Charges</b>
                </div>
                <div className="col-6 text-end">
                  <b>{subtotal}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
