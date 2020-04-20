import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { fetchMatchedAvailability } from "../../actions/availability";
import MatchedAvilabilityGroup from "./MatchedAvilabilityGroup";
// import * as moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > span": {
      margin: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: "0 auto",
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: "center",
  },
}));

export default function MatchedAvilability() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMatchedAvailability());
  }, []);

  const username = useSelector((state) => state.user.username);
  const matches = useSelector((state) => state.matches);
  if (!matches) return null;

  // const RenderAvailability = (availability) => {
  //   return availability.map((a) => (
  //     <div>
  //       groupName={a.groupName}
  //       members={a.userInfo}
  //       matches={a.matches.map((match) => match.startDate)}
  //     </div>
  //   ));
  // };

  return (
    <div className={classes.root}>
      {matches.length !== 0 && (
        <>
          <Grid container spacing={10} className={classes.title}>
            <Grid item xs={12} component="h2" variant="h6">
              {username}, your matches availabilities are:
            </Grid>
            <>
              {matches.map((m) => (
                <Grid item xs={12} sm={6}>
                  <Paper component="h3" variant="h6" className={classes.paper}>
                    Group name: {m.groupName}
                    <Typography align="center">
                      <MatchedAvilabilityGroup groupId={m.groupId} />
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </>
          </Grid>
        </>
      )}
    </div>
  );
}

// display
// export default function MatchedAvilability() {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchMatchedAvailability());
//   }, []);

//   const groups = useSelector((state) => state.groups);
//   if (!groups) return null;

//   const RenderAvailability = (props) => {
//     // Get info of each group
//     const result = groups.find((group) => group.groupId === props.groupId);
//     console.log("OUTPUT: RenderAvailability -> result", result)

//     // Get availability of each user in the group
//     const availability = result.users.map((user) => user.availabilities);

//     // Concatenate into a single list
//     const combinedAvailability = availability.reduce((acc, curr) => {
//       return acc.concat(curr);
//     }, []);

//     // Format the array with only 3 key/value pairs and format dates with Moment.js
//     var formattedAvailability = combinedAvailability.map((entity) => {
//       var newObj = {};
//       newObj["userId"] = entity.userId;
//       newObj["date"] = entity.startDate.concat(entity.endDate);
//       newObj["startDate"] = moment(entity.startDate).format(
//         "dddd, MMMM D YYYY, h:mm a"
//       );
//       newObj["endDate"] = moment(entity.endDate).format(
//         "dddd, MMMM D YYYY, h:mm a"
//       );
//       return newObj;
//     });

//     return (<div>Hi</div>)}

//   return (
//     <div className={classes.root}>
//       {groups.length !== 0 && (
//         <>
//           <Grid container spacing={10}>
//             <Grid item xs={12} component="h2" variant="h6">
//               your matched dates are:
//             </Grid>
//             <>
//               {groups.map((group) => (
//                 <Grid item xs={12} sm={6}>
//                   <Paper component="h3" variant="h6" className={classes.paper}>
//                     {group.groupName}

//                     <Typography>
//                       <RenderAvailability groupId={group.id} />
//                     </Typography>
//                     <Typography align="center"></Typography>
//                   </Paper>
//                 </Grid>
//               ))}
//             </>
//           </Grid>
//         </>
//       )}
//     </div>
//   );
// }
