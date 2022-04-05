import itemCount from "./itemCount";
import { FaPlus } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useEffect } from "react";

const itemCount = ({stock=0, initial=1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setCount(initial);
    }[]);

    const increment = () => {
        if (count < stock) {
            setCount (count + 1);
        }

        const decrement = () => {
            if (count > initial){
                setCount (count -1);
            }
        }
    }
    return (
            <contenedorProductos>
            <button  onclick={increment}></FaPlus>  </button>
            <cantidadProducto>{cantidad}</cantidadProducto>
            <button  onclick={decrement}></FaMinusCircle></button>
            <button>"Add to cart"</button>;
            </contenedorProductos>
    )
};


export default itemCount;