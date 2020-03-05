import React from "react";

export default function AvailabilityForm(props) {
  console.log("props of AvailabilityForm", props);

  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Start Date:
        <input
          name="startDate"
          type="datetime-local"
          min={Date.now()}
          value={props.values.startDate}
          onChange={props.onChange}
        />
      </label>

      <label>
        End Date:
        <input
          name="endDate"
          type="datetime-local"
          value={props.values.endDate}
          onChange={props.onChange}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}
