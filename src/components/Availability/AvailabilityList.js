import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { fetchAvailability } from "../../actions/availability";
// import CreateGroupContainer from "../CreateGroup"
// import AddMember from "../AddMember";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: "0 auto"
    // color: theme.palette.text.secondary
  },
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: "center"
  }
}));

export default function AvailabilityList(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvailability());
  }, []);

  const entity = useSelector(state => state.availability);
  const username = useSelector(state => state.user.username);
  if (!entity) return null;

  return (
    <div className={classes.root}>
      <Grid container justify="center" direction="column" spacing={3}>
        <Grid item xs={8} sm container>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5" className={classes.title}>
              {username}, your availabilities are:
            </Typography>
         
            <Typography>
              {entity.map(e => (
                <ul>
                  <li>
                    From {e.startDate.slice(0, 10)}
                    at {e.startDate.slice(11, 16)}
                    <br></br>
                    From {e.endDate.slice(0, 10)}
                    at {e.endDate.slice(11, 16)}
                  </li>
                </ul>
              ))}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

// class AvailabilityList extends Component {
//   componentDidMount() {
//     this.props.fetchAvailability();
//   }

//   render() {
//     if (!this.props.entity) return null;
//     return (
//       <div className={classes.root}>
//         <br></br>
//         <h1>{this.props.user.username}, your availability are:</h1>
//         <div>
//           {this.props.entity.map(e => (
//             <ul key={e.id}>
//               <li>
//                 From {e.startDate.slice(0, 10)} at
//                 {e.startDate.slice(11, 16)}
//                 <br></br>
//                 To {e.endDate.slice(0, 10)} at
//                 {e.endDate.slice(11, 16)}
//               </li>
//             </ul>
//           ))}
//         </div>
//         <CreateGroupContainer />
//         {/* <AddMember /> */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   // console.log("state of AvailabilityList", state);
//   return {
//     entity: state.availability,
//     user: state.user
//   };
// };
// export default connect(mapStateToProps, { fetchAvailability })(
//   AvailabilityList
// );
