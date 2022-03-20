import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { BiCookie } from "react-icons/bi";
import axios from 'axios';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';

function Menu() {

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  const [loading, setLoading] = useState(true);

  const [resultData, setResultData] = useState([]);
  
  const itemCard = (data) =>{
    const arr = data.map((data, index) => {
    data.quantity = 1;

    return(   
      //Item card from which we display all items data

      <div className="ItemCardBody">
        <div className="pizzaImage">
          <img src={data.img_url} alt="pizzaImage"/>
        </div>
        <div className="itemDetails">
          <div className="namePrice">
            <div className="name">{data.name}</div>
            <div className="myprice">₹ {data.price}</div>
          </div>
          <div className="features">
            <div className="vegNonVeg">{data.isVeg ? "🍃" : "🍗"}<br/>{data.isVeg ? "Veg" : "Non Veg"}</div>
            <div className="ratings">⭐<br/>{data.rating}</div>
            <div className="time">🕒<br/>20 min</div>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{data.description}</p>
          </div>
          <div className="cartBtn">
            <button type='button' onClick={()=> dispatch({type:"ADD", payload: data})}>🍕 ADD ME</button>
          </div>
        </div>
      </div>
    )
    })
    setResultData(arr);
  }


  //Fetch data from API using AXIOS

  useEffect(()=>{
        setLoading(true);
        axios.get(`https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68`).then((res)=>{
          setLoading(false);
          setData(res.data);
          setSearch(res.data);
          itemCard(res.data);
        })        
  }, []);

  if(loading) return "Please wait...";


  const itemName = data.map((data, index) => {                      //Render data to menu card from API
    return(
      <li key={index}>{data.name}</li>
    )
  })

  
  const filterVariant = (catItem) => {                              //Segregate Veg and Non-Veg items
    let filterData = [];
    if(catItem){
      filterData = data.filter((item) =>{
        return item.isVeg === catItem;
      });
    }
    else{
      filterData = data.filter((item) =>{
        return item.isVeg === catItem;
      });
    }
    if(filterData){
      itemCard(filterData);
    }
  };


  const sortFilterPriceRating = (e) =>{                             //All sorting functionality
    let category = e.target.value;

    let myFilterData = search;
    console.log(category, "Hi");
    if(category === 'highPrice'){
      myFilterData.sort((a, b) => { return b.price - a.price})
    }
    if(category === 'lowPrice'){
      myFilterData.sort((a, b) => {return a.price - b.price})
    }
    if(category === 'highRating'){
      myFilterData.sort((a, b) => {return b.rating - a.rating})
    }
    if(category === 'lowRating'){
      myFilterData.sort((a, b) => {return a.rating - b.rating})
    }
    itemCard(myFilterData);
  }
  

  return (
    <>
        <Header/>

        <div className="container">

            <div id='functionality'>
              <div className="sortFunction">
                <select id="priceRating" onChange = {(e)=>sortFilterPriceRating(e)}>
                  <option value="default">Sort based on</option>
                  <option value="highPrice">Price: High to Low</option>
                  <option value="lowPrice">Price: Low to High</option>
                  <option value="highRating">Rating: High to Low</option>
                  <option value="lowRating">Rating: Low to High</option>
                </select>
              </div>

              <div className="menuBtn">
                <button onClick={()=>{
                  if(document.getElementById("menuCard").style.display === "none"){
                    document.getElementById("menuCard").style.display = "block";
                  }
                  else{
                    document.getElementById("menuCard").style.display = "none";
                  }}}>
                  <BiCookie size={20}/> OUR MENU
                </button>
              </div>

              <div className="toggleFunction">  
                <button onClick={() => filterVariant(true)}>🍃 Veg</button>
                <button onClick={() => filterVariant(false)}>🍗 Non Veg</button>
              </div>
            </div>

            <div className="menuBody" >
              <div className="menuCardBody" id='menuCard'>
                <ul>
                  {itemName}
                </ul>
              </div>
            </div>

            <div className="row" id='itemCardData'>
              {resultData}
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Menu;