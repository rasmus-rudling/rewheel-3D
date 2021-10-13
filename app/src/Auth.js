import auth0 from "auth0-js";

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-84ubssw6.us.auth0.com",
      clientID: "6kgfnWgIi4MOYKC6yklguXeSnpfB0i4a",
      redirectUri: "http://localhost:8080/callback",
      audience: "https://dev-84ubssw6.us.auth0.com/userinfo",
      responseType: "token id_token",
      scope: "openid email",
    });

    this.login = this.signIn.bind(this);
    this.logout = this.signOut.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.authFlag = "isLoggedIn";
  }

  isAuthenticated() {
    return JSON.parse(localStorage.getItem(this.authFlag));
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    localStorage.setItem(this.authFlag, JSON.stringify(true));
  }

  signIn() {
    this.auth0.authorize();
  }

  signOut() {
    localStorage.setItem(this.authFlag, JSON.stringify(false));
    this.auth0.logout({
      returnTo: "http://localhost:8080",
      clientID: "6kgfnWgIi4MOYKC6yklguXeSnpfB0i4a",
    });
  }

  getIdToken() {
    return this.idToken;
  }

  silentAuth() {
    if (this.isAuthenticated()) {
      return new Promise((resolve, reject) => {
        this.auth0.checkSession({}, (err, authResult) => {
          if (err) {
            localStorage.removeItem(this.authFlag);
            return reject(err);
          }
          this.setSession(authResult);
          resolve();
        });
      });
    }
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    });
  }
}

const auth = new Auth();

export default auth;
