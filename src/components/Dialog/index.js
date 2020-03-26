import React, { useState, useEffect } from "react";
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
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
import { fetchUsers } from "../../actions/members";
import { addMember } from "../../actions/members";
import { fetchGroup } from "../../actions/group";

// const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
});

function SimpleDialog(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchGroup(Number(props.groupId)))
  // }, [])
  const { onClose, selectedValue, open, users } = props;
  const member = props.selectedValue.username;
  console.log("OUTPUT: SimpleDialog -> member", member);
  console.log("OUTPUT: SimpleDialog -> users", users);
  console.log("OUTPUT: SimpleDialog -> selectedValue", selectedValue);

  const handleClose = () => {
    onClose(member);
  };

  const handleListItemClick = value => {
    onClose(value);
    dispatch(addMember(value));
    console.log("OUTPUT: SimpleDialog -> value", value);
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
            onClick={() => handleListItemClick(user.username)}
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

        <ListItem
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
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
  // selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  console.log("OUTPUT: SimpleDialogDemo -> props", props);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  console.log("OUTPUT: SimpleDialogDemo -> selectedValue", selectedValue);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const users = useSelector(state => state.member.users);
  if (!users) return "loading...";

  const handleClickOpen = () => {
    dispatch(fetchGroup(Number(props.groupId)));
    setOpen(true);
  };

  const handleClose = value => {
    console.log("OUTPUT: SimpleDialogDemo -> value", value);
    setOpen(false);
    setSelectedValue([...selectedValue, value]);
  };
  return (
    <div>
      <Typography variant="subtitle1">Members: {selectedValue}</Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <GroupAddRoundedIcon />
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        users={users}
        groupId={props.groupId}
      />
    </div>
  );
}
