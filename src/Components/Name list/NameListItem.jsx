import React from "react";
import "./NameListItem.css";

function NameListItem(props) {
  return (
    <li className="list-group-item shadow">
      <div className="row align-items-center">
        <div className="col-2">
          <img src={props.avatar} alt={props.name} class="border rounded-circle shadow" />
        </div>
        <div className="col-10">
          <h4>{props.name}</h4>
          <p>{props.city} | {props.email}</p>
         
          <p>
            Birthday :{" "}
            <small>{new Intl.DateTimeFormat("en-GB").format(new Date(props.birthday))}</small>
          </p>
        </div>
      </div> 
    </li>
  );
}

export default NameListItem;
