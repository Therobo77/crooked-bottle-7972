import "./Payment.css";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <>
      <main className="">
        <section className="mx-auto col-6 mt-5 mb-5">
          <div className="card shadow p-4">
            <form>
              <div className="card-details">
                <h3 className="title mb-4">Credit Card Details</h3>
                <div className="row">
                  <div className="form-group col-sm-7">
                    <label for="card-holder">Card Holder Name</label>
                    <input
                      id="card-holder"
                      type="text"
                      className="form-control"
                      placeholder="Card Holder"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="form-group col-sm-5">
                    <label for="">Expiration Date</label>
                    <div className="input-group expiration-date">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM"
                        aria-label="MM"
                        aria-describedby="basic-addon1"
                      />
                      <span className="date-separator">/</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="YY"
                        aria-label="YY"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="form-group col-sm-8 mt-4">
                    <label for="card-number">Card Number</label>
                    <input
                      id="card-number"
                      type="text"
                      className="form-control"
                      placeholder="Card Number"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="form-group col-sm-4 mt-4">
                    <label for="cvc">CVC</label>
                    <input
                      id="cvc"
                      type="text"
                      className="form-control"
                      placeholder="CVC"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="form-group col-sm-12 text-end mt-4">
                    <button
                      type="button"
                      className="btn btn-warning btn-block"
                      onClick={() => goToHomePage()}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Payment;
