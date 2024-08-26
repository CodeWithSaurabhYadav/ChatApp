import { Link as RouterLink } from "react-router-dom";
// sections
import { Stack, Typography, Link } from "@mui/material";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

import SnackBar from "../utils";


// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Login to SphereX</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link
            to={"/auth/register"}
            component={RouterLink}
            variant="subtitle2"
          >
            Create an account
          </Link>
        </Stack>
      </Stack>
      {/* Form */}
      <LoginForm />

      <AuthSocial />
      <SnackBar />
    </>
  );
}
