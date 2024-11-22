export const getCart = async () => {
    const response = await fetch("http://localhost:8080/cart");
    const data = await response.json();
    return data;
};

export const updateCart = async (store, menus) => {
    // return await fetch("http://localhost:8080/cart", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         store: store,
    //         menus: menus,
    //     }),
    // });
    try {
        const response = await fetch("http://localhost:8080/cart", {
          method: "PATCH", // 기존 데이터 업데이트
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ store, menus }),
        });
        if (!response.ok) {
          throw new Error(`Failed to update cart: ${response.statusText}`);
        }
        console.log("Cart updated successfully!");
      } catch (error) {
        console.error("Error updating cart:", error.message);
      }
};