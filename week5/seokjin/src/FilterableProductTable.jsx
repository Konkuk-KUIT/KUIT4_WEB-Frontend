import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import InputBar from "./InputBar";

const FilterableProductTable = () => {
  const [product, setProduct] = useState([
    { id: "1", category: "Fruits", price: 1, stocked: true, name: "Apple" },
    {
      id: "2",
      category: "Fruits",
      price: 1,
      stocked: true,
      name: "Dragonfruit",
    },
    {
      id: "3",
      category: "Fruits",
      price: 2,
      stocked: false,
      name: "Passionfruit",
    },
    {
      id: "4",
      category: "Vegetables",
      price: 2,
      stocked: true,
      name: "Spinach",
    },
    {
      id: "5",
      category: "Vegetables",
      price: 4,
      stocked: false,
      name: "Pumpkin",
    },
    { id: "6", category: "Vegetables", price: 1, stocked: true, name: "Peas" },
  ]);

  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const addProduct = (newProduct) => {
    setProduct((previousData) => [...previousData, newProduct]);
  };

  //deleteProduct 구현
  const deleteProduct = (id) => {
    setProduct((prevProducts) => prevProducts.filter((product)=> product.id !== id)); //id가 일치하지 않는 상품들만 남기기
  }

  // editProduct (선택)

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        product={product}
        filterText={filterText}
        inStockOnly={inStockOnly}
        deleteProduct={deleteProduct}
      />
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;