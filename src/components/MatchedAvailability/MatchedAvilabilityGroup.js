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
  console.log("OUTPUT: MatchedAvilabilityGroup -> result", result);

  const renderInfo = result.availabilityInfo.map((info) => {
    var newObj = {};
    newObj["startDate"] = moment(info.rangeBegin).format(
      "dddd, MMMM D YYYY, h:mm a"
    );
    newObj["endDate"] = moment(info.rangeEnd).format(
      "dddd, MMMM D YYYY, h:mm a"
    );
    newObj["names"] = info.usernames.map((name) => <div>{name.username}</div>);
    return newObj;
  });

  return (
    <div>
      {result.availabilityInfo.length === 0 ? (
        <Typography>No matched availability</Typography>
      ) : (
        <>
          <Typography>
            {renderInfo.map((info) => (
              <>
                <ul>
                  <li>
                    From {info.startDate}
                    <br />
                    To {info.endDate}
                    <br></br>
                  </li>
                </ul>
                Available members:
                {info.names}
              </>
            ))}
          </Typography>
        </>
      )}
    </div>
  );
}
