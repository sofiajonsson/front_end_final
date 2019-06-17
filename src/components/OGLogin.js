import React from 'react'
import { withRouter } from "react-router-dom";

class Login extends React.Component {

    componentDidMount() {
        const oauthScript = document.createElement("script");
        oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";
        document.body.appendChild(oauthScript);
      }

      handleClick(e) {
        // Prevents page reload
        e.preventDefault();
				// debugger
        // Initializes OAuth.io with API key
        // Sign-up an account to get one
        window.OAuth.initialize('qivXd2mGo8MTqw9_Pc7Qse_QtM8');
        // Popup Github and ask for authorization
        window.OAuth.popup('google').then((provider) => {
          // Prompts 'welcome' message with User's name on successful login
          // Check console logs for additional User info
          provider.me().then((data) => {

            // console.log("data: ", data);
            localStorage.setItem("Final_Project_Token", provider.id_token)
            localStorage.setItem("Final_Project_Email", data.email)
            localStorage.setItem("Final_Project_Username", data.raw.names[0].displayName)
            debugger
            this.props.setStateUsernameEmailToken(data)
            this.props.history.push('/')
          this.sendAuth()
          });
        });
      }

      sendAuth = () => {
        fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: localStorage.getItem('Final_Project_Token'),
            email: this.props.user.email,
            name: this.props.user.name
          })
        })
        .then(res => res.json)
        .then( json => console.log('here is fetch return:',json))
      }


      render() {
        return (
          <div className="outer">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="ui placeholder segment">
              <div className="ui stackable very relaxed two column grid">
                <div className="column">
                  <form className="ui form">
                    <div className="field">
                      <label>Username</label>
                      <div className="ui left icon input">
                        <input type="text" placeholder="Username" /><i
                          aria-hidden="true"
                          className="user icon"
                        ></i>
                      </div>
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <div className="ui left icon input">
                        <input type="password" /><i
                          aria-hidden="true"
                          className="lock icon"
                        ></i>
                      </div>
                    </div>
                    <button className="ui primary button">Login</button>
                  </form>
                </div>
                <div className="middle aligned column">
                  <button className="ui big button">
                    <i aria-hidden="true" className="signup icon"></i>Sign up
                  </button>
                </div>
              </div>
              <div className="ui vertical divider">Or</div>
            </div>
            <div className="middle">
              <div className="inner">
                <h2 className="ui teal image header cursor" onClick={this.handleClick.bind(this)} >
                  <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' className="image cursor"></img>
                  <div className="content cursor">
                    Log-in with Google
                  </div>
                </h2>
              </div>
            </div>
          </div>
        )
      }
}

export default withRouter(Login)
