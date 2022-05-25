import React, {useState} from "react";
import NameListItem from "./NameListItem";

function NameList(){

  const [nameList, setNameList] = useState([
    { 
  id: 1,
  name: {title: "mr",first: "Brad",last: "gibson",},
  location: {city: "kilcoole",},
  email: "brad.gibson@example.com",
  dob: {date: "1993-07-20T09:44:18.674Z",age: 26,},
  picture: {medium: "https://randomuser.me/api/portraits/med/men/75.jpg",},
    },
    {
  id: 2,
  name:{title:"Ms",first:"Martha",last:"Morgan"},
  location:{city:"Inverness"},
  email:"martha.morgan@example.com",
  dob:{"date":"1982-12-04T17:34:48.879Z","age":40},
  picture:{"medium":"https://randomuser.me/api/portraits/med/women/19.jpg"},
    },
    
  
  ]);



const nameListComponent = () => {
  return(
    nameList.map(aName => {
      return(<NameListItem 
        key={aName.id}
        name={aName.name.first + ' ' + aName.name.last}
        city={aName.location.city} 
        email={aName.email}
        birthday ={aName.dob.date}
        avatar ={aName.picture.medium}
        />)
    })

  );
};


const addUserHandler = () => {
  const newUser = {
    id: 1,
    name: {title: "mr",first: "Arlo",last: "Clarke",},
    location: {city: "Whanganui",},
    email: "arlo.clarke@example.com",
    dob: {date: "1961-05-21T22:53:09.815Z",age: 26,},
    picture: {medium: "https://randomuser.me/api/portraits/med/men/65.jpg",},
  };

  setNameList((nameList) => nameList.concat(newUser));

};

    return (
        <React.Fragment>
        <div className="container mt-2">
        <button type="button" class="btn btn-primary mb-2 shadow" onClick={addUserHandler}>Add name</button>
        <ul className="list-group">
      {nameListComponent()}
    </ul>
        </div>
    
    </React.Fragment>
    );
}

export default NameList;