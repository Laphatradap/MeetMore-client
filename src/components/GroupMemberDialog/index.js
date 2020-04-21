import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
import { fetchUsers, addMember } from "../../actions/members";
import { fetchGroup, fetchGroups } from "../../actions/group";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

//dialog popup
function SimpleDialog(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { onClose, open, users, members } = props;
  // console.log("OUTPUT: SimpleDialog -> props", props)

  const handleClose = () => {
    onClose(members);
  };

  const handleListItemClick = (userId, username) => {
    dispatch(addMember(userId));
    onClose(username);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Add members</DialogTitle>
      <List>
        {users.map((u) => (
          <ListItem
            button
            onClick={() => handleListItemClick(u.id, u.username)}
            key={u.id}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={u.username} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

// show users that are clicked
function RenderMembers(props) {
  return (
    <div>
      {props.users.map((user) => (
        <ul>
          <PersonIcon />
          {user.username}
        </ul>
      ))}
    </div>
  );
}

//container
export default function GroupMemberDialog(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroups());

    dispatch(fetchUsers());
  }, []);

  // find the group that matches the currently rendered group
  const groups = useSelector((state) => state.groups);
  const users = useSelector((state) => state.users);
  if (!groups) return null;
  if (!users) return "loading...";

  const groupInfo = groups.find((group) => group.id === props.groupId);

  const handleClickOpen = (id) => {
    dispatch(fetchGroup(id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const memberNames = useSelector(state => state.groups.map(group => group.users.map(user => user.username)));
  // console.log("OUTPUT: GroupMemberDialog -> memberNames", memberNames)
  // // if (!users) return "loading...";
  // if (!memberNames) return null;

  // const members2 = members.map(member => member.users.username);

  return (
    <div>
      <Typography variant="subtitle1">
        Members:
        <RenderMembers groupInfo={groupInfo} />
      </Typography>
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => handleClickOpen(props.groupId)}
      >
        <GroupAddRoundedIcon />
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        users={users}
        // members={members2}
        groupId={props.groupId}
      />
    </div>
  );
}
//   return (
//     <div>
//       {result.users === null ? (

//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => handleClickOpen(props.groupId)}
//           // onClick={() => handleClickOpen()}
//         >
//           <GroupAddRoundedIcon />
//         </Button>

//       ) : (
//         <>
//         <Typography variant="subtitle1">
//           Members:
//           <RenderMembers result={result} />
//         </Typography>

//       <SimpleDialog
//         open={open}
//         onClose={handleClose}
//         users={users}
//         // members={members2}
//         groupId={props.groupId}
//       />
// </>
//       )
// }
//       </div>

// )
