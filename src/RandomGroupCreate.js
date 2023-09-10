import React, { useState } from 'react'
import { shuffle } from './helper';

function RanderPic(props) {

  const [noOfGroups, setNoOfGroups] = useState();
  const [groups, setgroups] = useState([]);


  const handleCreategroupsClick = () => {
    //logic for selecting random groups 
    const shuffledArray = shuffle(props.list)
    if (!noOfGroups || noOfGroups < 0) {
      setgroups([])
    }
    else {
      const noOfPeoplePergroups = shuffledArray.length / noOfGroups
      const res = [];
      for (let i = 0; i < noOfGroups; i++) {
        res.push(shuffledArray.slice(
          i * noOfPeoplePergroups,
          (i + 1) * noOfPeoplePergroups));
      }
      setgroups(res)
      
    }



  }

  return (
    <>

      <input type='Number' onChange={(event) => {
        setNoOfGroups(event.target.value)
      }} />
      <button type="button" className='btn btn-primary mx-5 my-3'   onClick={handleCreategroupsClick}>Create groups</button>
      

      {
        groups.map((group, index) => {
          return (
            <ul key={index}>{
              group.map((member, index) => {
                return <li key={index}>{member}</li>
              }
              )
            }
            </ul>
          )
        })
      }

    </>
  )
}

export default RanderPic
