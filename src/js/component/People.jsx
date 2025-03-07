import React, {useContext} from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';





const characterCard = {
    width: "16rem",
    height: "35rem",
    background: "#ffffff",
    textAlign: "left",
  };




export const People = () => {

const {store, actions} = useContext(Context)


  return (
    <>
    <div className="row align-items-center ms-1 ">
    <h1 className=" text-warning mb-5">Characters</h1>
    {store.peopleStarWars.map((value, index) => {

        
        return(
            
            <div className="col-4 mx-3 mb-5 rounded" style={characterCard} key={index}>
                  
                  <img src={`https://starwars-visualguide.com/assets/img/characters/` + (index + 1) + `.jpg`} className="card-img-top mt-3"  alt="..."></img>
                  <div className="card-body p-3">
                    <h5 className="card-title" ><b>{value.name}</b></h5>
                    <p className="card-text" > <b>Birth Year:</b>  {value.birth_year} </p>
                    <p className="card-text" > <b>Hair color:</b> {value.hair_color} </p>
                    <p className="card-text" > <b>Eye color:</b> {value.eye_color} </p>
                    <Link to={"/single/" + index}>
                      <button className="btn btn-primary">Learn more!</button>
                    </Link>
                    <button className="btn btn-warning ms-2" onClick={()=> actions.addFavorites(value.name) }><i className="fas fa-heart"></i></button>
                  </div>
                </div>
                
            
        )
    })}
    </div>
    </>
  )
}

