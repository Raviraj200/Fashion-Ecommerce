import React, { Fragment, useEffect } from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux"
import Loader from "../layout/loader/loader";
import { useAlert } from "react-alert";
import ProductCad from './ProductCard'
// const producst = {
//     name: "Tshirt",
//     images: [{ url:"https://tse2.mm.bing.net/th?id=OIP.MFkjKALdNDzXLrJLu1KlRAHaIw&pid=Api&P=0" }] ,
//     price: "$25",
//     _id: "raviraj",
// };
const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products,  } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }
        dispatch(getProduct());

    }, [dispatch, error, alert]);
    return (


        <Fragment>
            {loading ? (<Loader />) : (
                <Fragment>
                    <MetaData title="HOME" />



                    <div className="container" id="container">
                        {products && products.map((product) => <ProductCad product={product} />)}
                        {/* <Product product={producst}/> */}
                    </div>
                </Fragment>
            )}
     
        </Fragment>
  


    )
};
export default Home;