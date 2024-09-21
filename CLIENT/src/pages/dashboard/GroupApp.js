import React from "react";

import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Conversation from "../../components/Conversation";
import ContactInformaion from "../../components/Contact";

import NullConversation from "./utils";
import Groups from "../../components/dashobard/Group";

import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();

  const { sidebar, chat_type, room_id } = useSelector((state) => state.app);

  return (
    <>
      <Stack direction={"row"}>
        <Groups />
        <Box
          sx={{
            position: "relative",
            width: sidebar.open ? "calc(100vw - 800px)" : "calc(100vw - 400px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FFFFFF"
                : theme.palette.background.default,
            height: "100%",
          }}
        >
          {room_id !== null && chat_type !== null ? (
            <Conversation />
          ) : (
            <NullConversation />
          )}
        </Box>
        {sidebar.open && <ContactInformaion />}
      </Stack>
    </>
  );
};

export default GeneralApp;
