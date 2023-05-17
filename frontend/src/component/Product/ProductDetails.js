import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
// import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import MetaData from "../layout/MetaData"
import Loader from "../layout/loader/loader";

const API = "http://localhost:3000/api/v1/product";
const ProductDetails = ({ match }) => {
   const dispatch = useDispatch();
   const { id } = useParams();

   const { product, loading, error } = useSelector(
      (state) => state.productDetails

   );
   useEffect(() => {
      dispatch(getProductDetails(match.params.id));
   }, [dispatch, match.params.id, error, alert]);
   return (
      <Fragment>{loading ? (<Loader />) : (
         <Fragment>
            <MetaData title={`${product.name}--Ecom`}/>

            <div className="ProductDetails">
               <div>
                  <Carousel>
                     {product.imges && product.imges.map((item, i) => (
                        <img className="CarouselImage" key={item.url} src={item.url} alt={`${i} Slide`} />
                     ))}
                  </Carousel>
               </div>
               <div className="detailsBlock-1">
                  <h2>{product.name}</h2>
                  <p>Product {product._id}</p>
               </div>

            </div>
         </Fragment>
      )}

      </Fragment>

   )
}

export default ProductDetails;