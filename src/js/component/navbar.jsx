import React, {useContext, useState} from "react";
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";



export const Navbar = () => {

  const {store, actions} = useContext(Context);

	return (

		<div className="container mt-5  bg-light rounded">
      <nav className="navbar navbar-light bg-light mb-3 ">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1280px-Star_wars2.svg.png" width="100px"></img>
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/home">
            <div className="dropdown">
              <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              
                  {store.favoritesStarWars.map((value, index)=>{
                    return (
                      <li className={`list-item-${index}`} key={index}>
                      {value}
                      <i className="fas fa-trash ps-4" onClick={()=>{var thisItem = document.querySelector(`.list-item-${index}`); thisItem.innerHTML="";}} ></i>
                      </li>
                    )
                  })}
              </ul>
              
            </div>
          </Link>
        </div>
      </nav>
    </div>
	);
};