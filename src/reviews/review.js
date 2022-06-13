import React from "react";
import './review.css'
import { useContext, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { Usercontext } from "../App";
import  data from  '../data.json';
export default function Review() {
    

    const [Userreview, setUserview] = useContext(Usercontext);
    const [Index, setIndex] = useState(0);
    const [user, setuser] = useState();
    const {id, name, job, image, text} = data[Index];
  
    useEffect(() => {
   
    
        console.log("hi");
       
        console.log(data[Index]);

    }
   ,[Index] );
    
    const random = () => {
        let Index = Math.floor(Math.random() * 4);
      
              setIndex(Index);
            

        
      




    };


    const after = () => {
        if (Index === data.length - 1) {
            setIndex(0);
    
        }
        else {
            setIndex(Index + 1);
     
        }


    };
    const before = () => {
        if (Index === 0) {
            setIndex(data.length - 1);
        
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
                <button className="prev-btn" onClick={before} >
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={after}  >
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn"  onClick={random}>
                surprise me
            </button>
   </article>
        </div>

    );

}
