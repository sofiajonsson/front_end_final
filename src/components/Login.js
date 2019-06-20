import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
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

          this.props.setStateUsernameEmailToken(data)
          this.props.history.push('/user')
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
  render(){
    return(
              <div className="inner">
                <h2 className="ui teal image header cursor" onClick={this.handleClick.bind(this)} >
                  <img src="https://cdn0.iconfinder.com/data/icons/yooicons_set01_socialbookmarks/512/social_google_button_blue.png" alt='' className="image cursor"></img>
                  <div className="content cursor" id="login-text">
                    Log-in with Google
                  </div>
                </h2>
              </div>

    )
  }
}
export default withRouter(Login)
