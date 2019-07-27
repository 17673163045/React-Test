import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./common/css/index.scss"
import axios from "axios"

axios.get("/home/index/getFloorShow", {
    params: {
        city_id: "0",
        version: "6.0.1",
        referer: "2"
    }
}).then((res) => {
    console.log(res)
})
ReactDOM.render( < App / > , document.getElementById('root'));