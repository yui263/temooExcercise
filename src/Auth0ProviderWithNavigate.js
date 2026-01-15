import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom'; 


export default function Auth0ProviderWithNavigate({ children }) {
  const navigate = useNavigate();

  const domain = 'dev-jqgaytnol7zx24j5.us.auth0.com';
  const clientId = '1CY4yR8FNRhHu6LXFR9h0YlAxnCiK9mI';
  const audience = 'https://dev-jqgaytnol7zx24j5.us.auth0.com/api/v2/'; 
  const grant_type = "client_credentials"; 

  const onRedirectCallback = (appState) => {
    
    navigate(appState?.returnTo || "/welcome", { replace: true }); 



  }; 

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin  
      }}
      onRedirectCallback={onRedirectCallback}  
      grantType={grant_type} 
      cacheLocation="localstorage" 
      useRefreshTokens={true}  
    >
      {children}
    </Auth0Provider> 
  );
} 