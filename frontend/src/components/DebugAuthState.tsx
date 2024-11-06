import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const DebugAuthState = () => {
  const { isAuthenticated, user, error, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    console.log("User:", user);
    console.log("Error:", error);
  }, [isAuthenticated, user, error]);

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout()}>Log Out</button>
      <div>{isAuthenticated ? `Logged in as ${user?.email}` : "Not logged in"}</div>
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default DebugAuthState;
