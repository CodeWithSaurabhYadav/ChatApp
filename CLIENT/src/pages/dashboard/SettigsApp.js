import { Stack } from "@mui/material";
import React from "react";
import SettingsMenu from "../../components/dashobard/Setting/SettingsMenu";


const SettigsApp = () => {
  return (
    <>
      <Stack direction={"row"}>
        <SettingsMenu />
      </Stack>
    </>
  );
};

export default SettigsApp;
