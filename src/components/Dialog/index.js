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
// import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
import { fetchUsers, addMember } from "../../actions/members";
import { fetchGroup, fetchGroups } from "../../actions/group";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
});

//dialog popup
function SimpleDialog(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { onClose, open, users, members } = props;
  console.log("OUTPUT: SimpleDialog -> members", members);

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
        {users.map(user => (
          <ListItem
            button
            onClick={() => handleListItemClick(user.id, user.username)}
            key={user.id}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.username} />
          </ListItem>
        ))}

        {/* <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem> */}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
  // selectedValue: PropTypes.string.isRequired,
};

function RenderMembers(props) {
  console.log("OUTPUT: RenderMembers -> props", props);
  const members = useSelector(state => state.groups);
  if (!members) return null;

  // const eachGroupId = members.map(member => member.id)
  // const usernames = members.users.map(user => user.username)
  const result = members.find(member => member.id === props.groupId);
  console.log("OUTPUT: RenderMembers -> result", result);

  // if (eachgroupId === props.groupId) {
  //   const result = members.find(member => member.id === id)
  // }
  return (
    <div>
      {result.users.map(user => (
        <ul>
          <PersonIcon />
          {user.username}
        </ul>
      ))}
    </div>
  );
}

//container
export default function SimpleDialogDemo(props) {
  console.log("OUTP?UT: SimpleDialogDemo -> props", props);
  const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroups());
    dispatch(fetchUsers());
  }, []);

  const users = useSelector(state => state.member.users);
  const members = useSelector(state => state.groups);
  console.log("OUTPUT: SimpleDialogDemo -> members", members);
  if (!users) return "loading...";
  if (!members) return null;

  // const memberUsername = members.map(member => member.username);
  // console.log("OUTPUT: SimpleDialogDemo -> memberUsername", memberUsername)
  const members2 = members.map(member => member.users.username);
  console.log("OUTPUT: SimpleDialogDemo -> members2", members2);
  // const RenderMembers = (members, Component) => {
  //   return members.map(member => (
  //     <Component key={member.id} username={member.username} id={member.id} />
  //   ))
  // }

  const handleClickOpen = id => {
    dispatch(fetchGroup(id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // setSelectedValue([...selectedValue, value]);
    dispatch(fetchGroups());
  };

  return (
    <div>
      <Typography variant="subtitle1">
        Members:
        <RenderMembers groupId={props.groupId} />
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
        members={members2}
        groupId={props.groupId}
      />
    </div>
  );
}
