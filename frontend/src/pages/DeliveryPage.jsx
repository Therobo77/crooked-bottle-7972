import { useState } from "react";
import "../styles/DeliveryPage.css";

// not logged component
const NotLogged = () => {
  return <div className="not-logged">You are not Logged in</div>;
};

// logged component
const Logged = () => {
  const [address, setAddress] = useState('')

  const name = "Subhendu Das";
  const mobile = "8768392986";
  const price = 1000;
  const count = 1;

  const submitAddress = (e) => {
    e.preventDefault()
    console.log(address)
  }

  return (
    <div className="logged">
      {/* left sec */}
      <div className="left-sec">
        {/* login sec */}
        <div className="log-sec">
          <h4>
            <span>LOGIN</span>{" "}
            <img
              src="https://cdn2.iconfinder.com/data/icons/20-flat-general-pack/512/Tick-64.png"
              alt=""
            />
          </h4>
          <p>
            <small>
              <b>{name}</b> {mobile}
            </small>
          </p>
        </div>

        {/* delivery title sec */}
        <div className="delivery-title-sec">
          <h4>DELIVERY ADDRESS</h4>
        </div>

        {/* delivery sec */}
        <form className="delivery-sec" onSubmit={submitAddress}>
          <p className="delivery-name">
            <small>
              <b>{name}</b> {mobile}
            </small>
          </p>
          <input
            type="text"
            placeholder="Give your address here"
            className="delivery-address"
            onChange={e => setAddress(e.target.value)}
          />
          <br />
          <button type="submit">DELIVER HERE</button>
        </form>
      </div>

      {/* right sec */}
      <div className="right-sec">
        <div className="price-title">
          <h4>PRICE DETAILS</h4>
        </div>
        <hr />
        <div className="price-body">
          <p>
            <span>{`Price (1 item)`}</span> <span>₹{price}</span>
          </p>
          <p>
            <span>Delivery Charges</span> <span>FREE</span>
          </p>
          <hr />
          <h4>
            <span>Total Payable</span> <span>₹{price * count}</span>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

// main component
const DeliveryPage = () => {
  const [log, setLog] = useState(true);

  return (
    <div className="delivery-page">
      <div className="logo-sec">
        <img src="https://content.couponspy.in/public/shop/240.jpg" alt="" />
      </div>

      {log ? <Logged /> : <NotLogged />}
    </div>
  );
};

export default DeliveryPage;
