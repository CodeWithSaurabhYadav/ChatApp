import { Dialog, Stack, Tabs, Tab, DialogContent } from "@mui/material";
import React, { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import { FetchFriendRequests, FetchFriends, FetchUsers } from "../../../redux/slices/app";


const UserList = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchUsers());
  }, []);

  const { users } = useSelector((state) => state.app);

  return (
    <>
      {users.map((user) => (
        <Stack key={user._id}>
          <h1>{user.name}</h1>
        </Stack>
      ))}
    </>
  );
}


const FriendsList = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchFriends());
  }, []);

  const { friends } = useSelector((state) => state.app);

  return (
    <>
      {friends.map((user) => (
        <Stack key={user._id}>
          <h1>{user.name}</h1>
        </Stack>
      ))}
    </>
  );
}

const FriendsRequestList = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchFriendRequests());
  }, []);

  const { friendRequests } = useSelector((state) => state.app);

  return (
    <>
      {friendRequests.map((user) => (
        <Stack key={user._id}>
          <h1>{user.name}</h1>
        </Stack>
      ))}
    </>
  );
}


const Friends = ({ open, handleClose }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      sx={{
        p: 4,
      }}
      open={open}
      keepMounted
      onClose={handleClose}
    >
      <Stack
        p={2}
        sx={{
          width: "100%",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Explore" />
          <Tab label="Friends" />
          <Tab label="Requests" />
        </Tabs>
      </Stack>

        <DialogContent>
          <Stack sx={{height: "100%"}}>
            <Stack spacing={2.5}>
              {(() => {
                switch (value) {
                  case 0:
                    return <UserList />;
                  case 1:
                    return <FriendsList/>;
                  case 2:
                    return <FriendsRequestList />;
                  default:
                    return <h1>Explore</h1>;
                }
              })}
            </Stack>
          </Stack>
        </DialogContent>

    </Dialog>
  );
};

export default Friends;
