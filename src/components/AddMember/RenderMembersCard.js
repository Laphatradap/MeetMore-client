import React from "react";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    margin: 0,
    display: "inline-block",
  },
  chip: {
    margin: theme.spacing(0.4),
  },
}));

export default function RenderMembers(props) {
  const classes = useStyles();

  return (
    <div component="ul" className={classes.root}>
      <li>
        <Chip
          size="small"
          key={props.id}
          label={props.name}
          color="primary"
          className={classes.chip}
        />
      </li>
    </div>
  );
}
