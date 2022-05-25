import { useEffect, useState } from "react";
const useProductById = (id) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    return [product, setProduct];
}
export default useProductById;