import React, { useState, useMemo, useCallback } from "react";
import SearchBar from "../Components/SearchBar";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductList from "./../Components/ProductList/ProductList.jsx";
import Loading from "../Components/SheardComponents/Loading.jsx";
import NotFound from "../Components/SheardComponents/NotFound.jsx";
import CategoryFilter from "./../Components/CategoryFilter.jsx";
import { filterProducts } from "../utils/filterProducts.js";

export default function ProductsPage() {
  const { products, loading } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const[category,setCategory]=useState('All');
  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

const categories = useMemo(() => {
  return ["All", ...new Set(products.map(p => p.category))];
}, [products]);

 const filteredProducts = useMemo(() => {
  if (products?.length<0) return []; 
    return filterProducts(products, searchTerm, category);
  }, [products, searchTerm, category]);

  if (loading) return <Loading />;

  return (
    <div className="container-fluid px-3 py-3  mx-auto">
        <div className="px-5 py-2 d-flex  align-items-center shadow-sm 
         bg-light  w-100  flex-wrap
          gap-3 ">

    <SearchBar
        placeholder="Search products..."
        onSearch={handleSearch}
      />

         <CategoryFilter categories={categories}  selected={category}
           onFilterChange={setCategory}/>
           </div>
     {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <NotFound 
          message={
            searchTerm 
              ? `لا توجد منتجات مطابقة للبحث "${searchTerm}"` 
              : "لا توجد منتجات"
          }
        />
      )}
    </div>
  );
}
