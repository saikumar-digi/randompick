import React, { useState } from 'react'
import { shuffle } from './helper';

function RanderPic(props) {

  const [noOfPeopleToSelect, setNoOfPeopleToSelect] = useState();
  const [randomPaople, setRandomPaople] = useState([]);


  const handlePickBtnClick = () => {
    //logic for selecting random peaple 
    const shuffledArray = shuffle(props.list)

    if (noOfPeopleToSelect === undefined || noOfPeopleToSelect < 0 || noOfPeopleToSelect > shuffledArray.length) {
      setRandomPaople([])
      alert("give prover number")
    }
    else {
      const slicedArray = shuffledArray.slice(0, noOfPeopleToSelect);
      setRandomPaople(slicedArray)
    }


  }

  return (
    <>

      <input type='Number' onChange={(event) => {
        setNoOfPeopleToSelect(event.target.value)
      }} />


      <button type="button" className='btn btn-primary mx-5 my-3' onClick={handlePickBtnClick}>Pick Any Random People</button>

      <ul>
        {
          randomPaople.map((person, index) => <li key={index}>{person}</li>)
        }

      </ul>

    </>
  )
}

export default RanderPic
