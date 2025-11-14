import { useEffect, useState } from "react";
import { productsData } from "./../const/ProductData";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 500);
  }, []);

  return { products, loading };
}

export default useFetchProducts;
