import { useEffect, useState } from "react";

const useOrder = (id) => {
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    return [order, setOrder];
}
export default useOrder;