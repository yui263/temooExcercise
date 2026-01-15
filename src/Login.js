import React, { Component } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; 


function withNavigation(Wrapped) {
  return function Inner(props) {
    const navigate = useNavigate();
    const {
      loginWithRedirect,
      isAuthenticated,
      isLoading,
      user,
      error,
      getAccessTokenSilently, 
    } = useAuth0();

    return (
      <Wrapped
        {...props}
        navigate={navigate}
        loginWithRedirect={loginWithRedirect}
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
        user={user}
        authError={error}
        getAccessTokenSilently={getAccessTokenSilently}
      />
    );
  };
} 


class Login extends Component { 

    constructor(props) { 
        super(props); 
        this.state = { uiError: null, hasPostedUser: false }; 
        this.redirectTimer = null; 
    } 

    componentDidMount() {  

        const { navigate, user } = this.props;

         if (this.props.isAuthenticated) { 
            
            if (this.redirectTimer) clearTimeout(this.redirectTimer);
    this.redirectTimer = setTimeout(() => {
      navigate("/welcome", { state: { user } });
    }, 2000); 
         } 
    } 

    componentWillUnmount() {
    if (this.redirectTimer) clearTimeout(this.redirectTimer);
  } 

  handleAuth0Login = async () => {
    try {
      await this.props.loginWithRedirect({
        authorizationParams: { prompt: "login" },
        appState: { returnTo: "/welcome" },  
      });
    } catch {
      this.setState({ uiError: "Errore durante il login." });
    }
  };

  handleAuth0Signup = async () => {
    try {
      await this.props.loginWithRedirect({
        authorizationParams: { prompt: "login" },
        screen_hint: "signup",
        appState: { returnTo: "/welcome" },  
      });
      
    } catch {
      this.setState({ uiError: "Errore durante la registrazione." });
    }
  };

  render() { 

    const { isLoading, isAuthenticated, authError } = this.props; 
    const { uiError } = this.state; 

    return (
      <div style={{textAlign: 'center'}}> 
        <h1>Accedi</h1>

        {isLoading && <p style={{ color: "#fff" }}>Caricamento…</p>}
        {authError && <p style={{ color: "yellow" }}>Errore Auth0: {authError.message}</p>}
        {uiError && <p style={{ color: "yellow" }}>{uiError}</p>}

        {!isAuthenticated && (
          <div
            className="p-4 bg-light rounded inline-block"
            style={{ display: "inline-block", minWidth: 320 }}
          >
            <button 
              className="signin" 
              type="button"
              onClick={this.handleAuth0Login}
              style={{ marginRight: 10, padding: "8px 14px" }}
              disabled={isLoading}
            >
              Accedi con Auth0
            </button>

            <button 
              className="signup" 
              type="button"
              onClick={this.handleAuth0Signup}
              style={{ padding: "8px 14px" }}
              disabled={isLoading}
            >
              Registrati con Auth0
            </button>

            <div style={{ marginTop: 16 }}>
              <NavLink to="/forgot-password">Hai dimenticato la password?</NavLink>
            </div>
          </div>
        )}

        {isAuthenticated && (
          <p style={{ marginTop: 12 }}>
            Accesso effettuato, ti reindirizzo alla Dashboard…
          </p>
        )}

        <div style={{ marginTop: 16 }}>
          <NavLink to="/">
            Torna alla Home
          </NavLink>
        </div>
      </div>
    );
  }
} 


export default withNavigation(Login); 


