import React from "react";
import { useDispatch } from "react-redux";
import { addMember } from "../../actions/members";

export default function Member(props) {
  console.log("OUTPUT: Member -> props", props);
  const dispatch = useDispatch();

  // TO DO : only show button if its friend list
  return (
    <div>
      <ul key={props.id}>
        <h3>{props.username}</h3>
        {!props.members && (
          <button onClick={() => dispatch(addMember(props.id))}>
            Add to group
          </button>
        )}
      </ul>
    </div>
  );
}
