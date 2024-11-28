export const getCart = async () => {
    const response = await fetch("http://localhost:8080/cart");
    const data = await response.json();
    console.log("response from getcart")
    console.log(data)
    return data;
}

export const updateCart = async (store, menus) => {
    return await fetch("http://localhost:8080/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            store: store,
            menus: menus 
        })
    })
}