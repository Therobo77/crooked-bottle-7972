import { Box } from "@chakra-ui/react";

export default function SingleMobileCard(data) {
  console.log("mate", data);
  return (
    <div className="m-4">
      {/* <img src={data.images[0]} alt={data.title} height="100px" /> */}
      <div className="row">
        {data.images &&
          data.images.map((item) => {
            return (
              <div className="col-2">
                <img src={item} />
              </div>
            );
          })}
      </div>

      <p>title:{data.title}</p>
      <p>Description:{data.description}</p>
      <b>Price:{data.price}</b>
      <p>rating :{data.rating}</p>
    </div>
  );
}
