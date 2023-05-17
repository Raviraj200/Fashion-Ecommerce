import React, { Fragment, useState } from "react";
// import {useHistory} from "react-router-dom";
import "./Searc.css";
import MetaData from "../layout/MetaData"

const Search = ({history})=>{
    // const history = useHistory();
    const [keyword,setKeyword]=useState("");
    const searchSubmitHandler =(e)=>{
        // const routerHistory = useHistory();
        e.preventDefault();
        if(keyword.trim()){
       history.push(`/products/${keyword}`);
       

        }else{
            history.push( "/products");
        }

    }
    return<Fragment>
        <MetaData title="Search a product"/>
        <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input type="text" placeholder="Search..." onChange={(e)=>setKeyword(e.target.value) }/>
            <input type="submit" value="Search" />
        </form>
        
    </Fragment>
};

export default Search;