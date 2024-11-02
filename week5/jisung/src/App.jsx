import { useState } from 'react'

// import components
import FilterableProductTable from './FilterableProductTable'; 

const App = () => {
    const [product, setProduct] = useState([
        { 
            id: "1", 
            category: "Fruits", 
            price: 1, 
            stocked: true, 
            name: "Apple" 
        },
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
        { 
            id: "6", 
            category: "Vegetables", 
            price: 1, 
            stocked: true, 
            name: "Peas" 
        }
    ]);

    return <FilterableProductTable product={product} setProduct={setProduct}/>;
}

export default App