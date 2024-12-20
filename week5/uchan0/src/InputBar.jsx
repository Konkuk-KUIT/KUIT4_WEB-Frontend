import React, { useState } from "react";

const InputBar = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({
    id: "0",
    category: "",
    price: 0,
    stocked: false,
    name: "",
  });

  const handleChange = (value, label) => {
    setNewProduct({ ...newProduct, [label]: value });
  };

  const handleAddNewProduct = () => {
    const productWithId = { ...newProduct, id: Date.now().toString() };
    addProduct(productWithId);
    setNewProduct({ category: "", price: 0, stocked: true, name: "" });
  };

  return (
    <form>
      <input
        type="text"
        value={newProduct.category}
        onChange={(e) => handleChange(e.target.value, "category")}
        placeholder="category..."
      />
      <input
        type="text"
        value={newProduct.price}
        onChange={(e) => handleChange(e.target.value, "price")}
        placeholder="price..."
      />
      <label>Is Stocked?</label>
      <input
        type="checkbox"
        value={newProduct.stocked}
        onChange={(e) => handleChange(e.target.checked, "stocked")}
      />
      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => handleChange(e.target.value, "name")}
        placeholder="name..."
      />
      {/* 상품 정보를 모두 입력하지 않았을 때 Add! 버튼 보이지 않게 수정 */}
      {newProduct.category && newProduct.price && newProduct.name && (
        <button
          onClick={handleAddNewProduct}
          type={"button"}
          style={{
            marginLeft: "5px",
            padding: "5px 10px",
            border: "1px solid #000",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add!
        </button>
      )}
    </form>
  );
};

export default InputBar;
