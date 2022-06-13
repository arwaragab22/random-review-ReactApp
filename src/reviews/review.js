import React from "react";
import './review.css'
import { useContext, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { Usercontext } from "../App";
import user from "https://github.com/arwaragab22/random-review-ReactApp/blob/master/src/data.json";
export default function Review() {
    const Userreview = useContext(Usercontext);

    const [Index, setIndex] = useState(0);
  
    const { name, image, job, text} = user[Index];
  

    const random = () => {
        let Index = Math.floor(Math.random() * 4);
        if (Index === user.id) {
            setIndex(Index + 1);
         
        }
        else {
              setIndex(Index);
            

        }
      




    };


    const after = () => {
        if (Index === Userreview.length - 1) {
            setIndex(0);
    
        }
        else {
            setIndex(Index + 1);
     
        }


    };
    const before = () => {
        if (Index === 0) {
            setIndex(Userreview.length - 1);
        
        } else {
            setIndex(Index - 1);
           
        }
    };




    return (

        <div>
            <article className="review">
                <div className="containerimg">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>

            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={after} >
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={after}  >
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={random}  >
                surprise me
            </button>
   </article>
            

        </div>

    );

}
