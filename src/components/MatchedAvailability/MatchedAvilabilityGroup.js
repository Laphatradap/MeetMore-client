import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import * as moment from "moment";

export default function MatchedAvilabilityGroup(props) {
  const { groupId } = props;
  const userloggedin = useSelector((state) => state.user.username);
  const matches = useSelector((state) => state.matches);
  if (!matches) return null;
  if (!userloggedin) return null;

  const result = matches.find((match) => match.groupId === groupId);

  const members = result.userInfo.filter((r) => r != userloggedin);

  const datesFormatted = result.matches.map((date) => {
    var newObj = {};
    newObj["startDate"] = moment(date.rangeBegin).format(
      "dddd, MMMM D YYYY, h:mm a"
    );
    newObj["endDate"] = moment(date.rangeEnd).format(
      "dddd, MMMM D YYYY, h:mm a"
    );
    return newObj;
  });

  return (
    <div>
      {result.matches.length === 0 ? (
        <Typography>No matched availability</Typography>
      ) : (
        <>
          <Typography>
            Members available: {members}
            {datesFormatted.map((date) => (
              <ul>
                <li>
                  From {date.startDate}
                  <br />
                  To {date.endDate}
                  <br></br>
                </li>
              </ul>
            ))}
          </Typography>
        </>
      )}
    </div>
  );
}
