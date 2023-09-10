import { useState } from "react";
import PeopleList from "./PeopleListBox.js";
import RandomPick from "./RandomPick.js";
import RandomGroupCreate from "./RandomGroupCreate.js"
import Navbar from "./Navbar.js";
import Contact from "./Contact.js";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const[peopleList,setPeopleList] =useState([]);

  return (
    <div className="App">
    <Navbar />
   
    {/* <People onChange={(list) => setPeopleList(list) }/> */}
    <div className='container my-3'>
     <PeopleList onChange={setPeopleList}/>
     </div>
     <div className='container my-3'>
      <RandomPick list={peopleList} />
      <RandomGroupCreate  list={peopleList}/>
      </div>
    </div>

    
  );
}

export default App;
