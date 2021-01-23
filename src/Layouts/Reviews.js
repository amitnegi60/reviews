import React, { useState} from 'react';
import peoples from './Data'
import { FaChevronLeft, FaChevronRight,} from 'react-icons/fa';

const Reviews = () => {


const[index, setIndex] = useState(0);

const {name, job, image, text} = peoples[index];

const nextPerson = () => {

  setIndex((index) => {

    
let newindex = index + 1 ;
if(newindex > peoples.length - 1){
  newindex = 0;
}
return newindex;

}
  )
};

const prevPerson = () => {

setIndex((index) => {

let newindex = index - 1 ;


if(newindex < 0){
  return peoples.length - 1;
}



return newindex;

})
}


const randomnum= () => {

  let num = Math.floor(Math.random() * peoples.length) + 0;
  return setIndex(num);
}




  return (
<>
<article className="review">
<div className="img-container">
  <img src={image} alt={name} className="person-img"/>
  <span className="quote-icon"></span>
</div>
<h4 className="author">{name}</h4>
<p className="job">{job}</p>
<p className="info">{text}</p>
<div className="button-container">
  <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
  <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
</div>
<button className="random-btn" onClick = {randomnum}>Random</button>
</article>
</>

  );
};

export default Reviews;