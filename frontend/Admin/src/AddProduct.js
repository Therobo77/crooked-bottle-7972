import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "./Redux/ProductReducer/action";
let initialState = {
  image: "",
  brand: "",
  price: "",
  description: "",
  category: "",
  rating: "",
  stock: "",
  thumbnail: "",
  title: "",
};

const AddProduct = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "value-", value);
    console.log(product);
    setProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct(initialState);
    navigate("/tables");
  };
  return (
    <>
      <div class="row mt-3">
        <div class="col-12 col-xl-12">
          <div class="card card-body border-0 shadow mb-4">
            <h2 class="h5 mb-4">Add Product Details</h2>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="first_name">Product Name</label>{" "}
                    <input
                      class="form-control"
                      id="product_name"
                      type="text"
                      name="title"
                      placeholder="product_name"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Product Brand</label>{" "}
                    <input
                      class="form-control"
                      id="product_brand"
                      type="text"
                      name="brand"
                      placeholder="product_brand"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Product Title</label>{" "}
                    <input
                      class="form-control"
                      id="product_title"
                      type="text"
                      name="title"
                      placeholder="product_title"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Product Category</label>{" "}
                    <input
                      class="form-control"
                      id="product_brand"
                      type="text"
                      name="category"
                      placeholder="product_brand"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Product Price</label>{" "}
                    <input
                      class="form-control"
                      id="product_category"
                      type="number"
                      name="price"
                      placeholder="product_price"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div>
                    <label for="last_name">Product Stock</label>{" "}
                    <input
                      class="form-control"
                      id="product_stock"
                      type="text"
                      name="stock"
                      placeholder="product_stock"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6 mb-3">
                  <div class="form-group">
                    <label for="city">Rating</label>{" "}
                    <input
                      class="form-control"
                      id="rating"
                      type="text"
                      name="rating"
                      placeholder="rating"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="zip">Product Image</label>{" "}
                    <input
                      class="form-control"
                      id="image"
                      type="text"
                      name="thumbnail"
                      placeholder="Product Image URL"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm- mb-3">
                  <div class="form-group">
                    <label for="address">Description</label>{" "}
                    <input
                      class="form-control"
                      id="Description"
                      type="text"
                      name="description"
                      placeholder="Enter your Description"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <button
                  class="btn btn-gray-800 mt-2 animate-up-2"
                  type="submit"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
