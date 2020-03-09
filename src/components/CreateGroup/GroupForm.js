import React from "react";

export default function GroupForm(props) {
  // console.log("props of GroupForm", props.values.name);
  return (
    <form onSubmit={props.onSubmit}>
      <label>
      Group name:
      <input
        name="name"
        type="text"
        value={props.values.name}
        onChange={props.onChange}
      />
      </label>
      <button type="submit">Create!</button>
    </form>
  );
}
