export const getCart = async()=>{
    const response = await fetch("http://localhost:8080/cart");
    const data = await response.json();
    return data;
};
export const updateCart = async (store, menus) => {
    // 정확한 데이터 구조 생성
    

    const response = await fetch("http://localhost:8080/cart", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            store: { ...store },  // store 객체를 복사하여 전달
        menus: [...menus],
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to update cart: ${response.statusText}`);
    }

    return await response.json();
};
// export const ClearCart = async (store, menus) => {
//     const response = await fetch("http://localhost:8080/cart", {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             store,
//             menus,
//         })
//     });

//     if (!response.ok) {
//         // 응답 상태가 OK가 아닐 경우 오류 처리
//         throw new Error(`Failed to update cart: ${response.statusText}`);
//     }

//     return await response.json(); // 응답이 성공적일 때 데이터 반환
// };