import React from 'react';

const ProductRow = ({ product, onDelete }) => {
    return (
        <tr>
            <td style={{ color: product.stocked ? "black" : "red" }}>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <button onClick={() => onDelete(product.id)}>삭제</button>
            </td>
        </tr>
    );
};

export default ProductRow;