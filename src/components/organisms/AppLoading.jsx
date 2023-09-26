import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function AppLoading(props) {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center zindex">
      <div className="">
        <CircularProgress color="primary" size={70} />
      </div>
      {props.message && <p>{props.message}</p>}
    </div>
  );
}
