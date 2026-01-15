import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function withAuth0AndNavigation(Component) {
  return function Wrapped(props) {
    const navigate = useNavigate();
    const {
      loginWithRedirect,
      logout,
      isAuthenticated,
      isLoading,
      user,
      getAccessTokenSilently
    } = useAuth0();

    return (
      <Component
        {...props}
        navigate={navigate}
        auth0={{
          loginWithRedirect,
          logout,
          isAuthenticated,
          isLoading,
          user,
          getAccessTokenSilently
        }}
      />
    );
  };
}

export default withAuth0AndNavigation;