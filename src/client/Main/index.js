import React, { useState } from "react";
import Navmain from "./navbar";
import axios from "axios";
import swal from "sweetalert";
import "./index.css";

const Mainmenu = () => {
  const [crypto, setCrypto] = useState("");
  const [img, setImage] = useState("");
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [link, setLink] = useState("");
  const [usd, setUsd] = useState("");
  const [myr, setMyr] = useState("");

  const handleSubmit = (e) => {
    const url = "https://api.coingecko.com/api/v3/coins/" + crypto;
    e.preventDefault();
    if (crypto === "") swal("Wrong input", "Please try enter a name", "error");
    else 
    
    axios.get(url).then((res) => {
      const resData = res.data;
      setImage(resData.image.large);
      setName(resData.name);
      setSymbol(resData.symbol);
      setLink(resData.links.homepage[0]);
      setUsd(resData.market_data.current_price.usd);
      setMyr(resData.market_data.current_price.myr);
    });
  };

  return (
    <div>
      <Navmain />
      <div className="App">
        <h1 className="p-4 main-info">Cryptocurrency Search</h1>
        <div className=" d-flex justify-content-center">
          <div className="col-md-4 mt-5 ">
            <input
              type="text"
              className="form-control App"
              value={crypto}
              onChange={(e) => setCrypto(e.target.value)}
              placeholder="Search for any cryptocurrency"
              required
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-secondary px-5 mt-4">
          Submit
        </button>
        <div className="mt-5 container-fluid d-flex justify-content-center ">
          <div className="col-md-4 p-2 rounded bg-color">
            <img src={img} alt='img' width="150" />
            <br />
            <h1 className="text-white">{name}</h1>
            <h2 className="text-white">{symbol}</h2>
            <h2>
              <a href={link}>{link}</a>
            </h2>
            <br />
            <h2 className="text-white">USD {usd}</h2>
            <h2 className="text-white">MYR {myr}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainmenu;
