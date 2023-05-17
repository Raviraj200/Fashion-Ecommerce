import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {

    const options = {
        edit: false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:window.innerWidth < 600 ? 20:25,
        value:2.5,
        isHalf:true,
    
    };
    return (
        <Link className="productCard" to={`/product/${product._id}`}>
            <img src={"https://tse3.mm.bing.net/th?id=OIP.CgxMlCiyODbRsllVFq37DwHaHa&pid=Api&P=0"} alt={product.name} />
            <span>{`₹${product.price}`}</span>
            <div>
                <ReactStars {...options} />{" "}<span>({product.numOfReviews} Reviews)</span>
            </div>
            <p>{product.name}</p>
            
    
        </Link>
    )
}; 
export default ProductCard;