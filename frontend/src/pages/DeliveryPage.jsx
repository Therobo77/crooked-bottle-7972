import { useState } from "react";
import '../styles/DeliveryPage.css'

// not logged component
const NotLogged = () => {
  return <div className="not-logged">You are not Logged in</div>;
};

// logged component
const Logged = () => {
  const name = "Subhendu Das";
  const mobile = "8768392986";
  const address = "Bus stand, Asansol, Paschim Bardhaman, 700001";

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

        {/* delivery sec */}
        <div className="delivery-sec">
          <h4>DELIVERY ADDRESS</h4>
          <p>
            <small>
              <b>{name}</b> {mobile}
            </small>
          </p>
          <p>
            <small>{address}</small>
          </p>
          <button>DELIVER HERE</button>
        </div>
      </div>

      {/* right sec */}
      <div className="right-sec">
        
      </div>
    </div>
  );
};

// main component
export const DeliveryPage = () => {
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
