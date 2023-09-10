import React from 'react'

function People(props) {
    return (
  
        <>
    
    <div className="mb-3">
  <textarea className="form-control" placeholder="Enter The Participants Name Here"  id="myBox" rows="8"
            onChange={(event) => {
                const listString = event.target.value;
                const list=
                 listString.split(',')
                 .filter(str => {
                    return str.trim().length
                  })
                 .map(str => {
                    return str.trim();
                })
                console.log(list)
                props.onChange(list)
               
                 
            }} />
            </div>
            </>
       
    )
}

export default People
