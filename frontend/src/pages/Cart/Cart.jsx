import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart, increment_decremtn_Cart_Item, removeItemCart, remove_Item_Cart } from "../../Redux/CartReducer/cartAction";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/LandingPage/Header/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const [delivery, setDelivery] = useState(40);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {cartItem} = useSelector((store) =>  store.CartReducer);
 
  // console.log("cart",cartItem);


  useEffect(() => {
    let ttl=0
    cartItem?.forEach((item) => {
     
      ttl+=Number(item.price)*Number(item.quantity)
    });
    setPrice(ttl)
  }, [cartItem]);
console.log(price,total);
  const removeItemFromCart = (id) => {
    dispatch(remove_Item_Cart(id));
  };
  const handleItemNumber=(id,val)=>{
    dispatch(increment_decremtn_Cart_Item(id,val));
  }
  const goToHomePage = () => {
    navigate("/");
  };
  const buyNow = () => {
    console.log("payment");
    navigate("/payment");
 
  };




  return (
    <>
      <Header />
      <Navbar />
      {cartItem?.length === 0 ? (
        <div className="mx-auto col-8">
          <div className="card mt-5 mb-5">
            <div className="text-center mt-5 mb-5">
              {" "}
              <h1>No item in Cart</h1>
              <button
                onClick={() => goToHomePage()}
                className="btn btn-warning mt-4"
              >
                Go Homepage 
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-10 mx-auto mt-5 mb-5">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="card p-3">
                <div className="row">
                  <h5>My Cart({cartItem?.length})</h5>
                  <div className="col-12">
                    {cartItem.length>0 &&
                      cartItem?.map((el) => {
                        return (
                          <div key={el.id} className="card p-3 mt-2">
                            <div className="row">
                              <div className="col-2">
                                <img src={el.image} alt={el.title} />
                              </div>
                              <div className="col-10">
                                <h5>{el.title}</h5>
                                <h5>{el.category}</h5>
                                <p>
                                  Price: <del>1000</del>{" "}
                                  <b>{el.price}</b>
                                </p>
                              </div>
                            </div>

                            <div className="row mt-3">
                              <div className="col-md-3 col-12">
                                <div className="input-group">
                                 <button
                                    className="button-minus"
                                    data-field="quantity"
                                    disabled={el.quantity<=1}
                                    onClick={()=>{handleItemNumber(el.id,-1)}}
                                    >
                                      -
                                    </button>
                                  <input
                                    type="number"
                                    step="1"
                                    max=""
                                    value={el.quantity}
                                    name="quantity"
                                    className="quantity-field"
                                    
                                    />
                                  <button
                                    onClick={()=>{handleItemNumber(el.id,1)}}
                                    className="button-plus"
                                    data-field="quantity"
                                  >+</button>
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
                    <p>Price </p>
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
                    <b>{price+delivery}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
};

export default Cart;
