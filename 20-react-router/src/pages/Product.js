import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();

  return (
    <div>
      <h1>This here is Product #{params.id}</h1>
    </div>
  );
}

export default Product;
