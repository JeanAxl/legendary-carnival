import React, { useCallback } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { createStyles, Theme } from "@material-ui/core";
import RootRef from "@material-ui/core/RootRef";
import Paper from "@material-ui/core/Paper";

import { useDropzone } from "react-dropzone";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dropzone: {
      width: theme.spacing(25),
      padding: "18.5px 14px",
      boxSizing: "border-box",
      borderColor: "grey",
      borderStyle: "dashed",
      borderWidth: "2px",
      borderRadius: "4px",
      display: "flex",
      height: theme.spacing(10),
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        borderColor: "black",
      },
    },
  }),
);

export const DropZone: React.FC = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);
  const classes = useStyles();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const { ref, ...rootProps } = getRootProps();
  return (
    <RootRef rootRef={ref}>
      <Paper className={classes.dropzone} {...rootProps}>
        {" "}
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Click to upload</p>}
      </Paper>
    </RootRef>
  );
};
