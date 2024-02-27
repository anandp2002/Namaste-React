import React from 'react';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      userInfo: {
        name: 'Dummy name',
        login: 'dummy login',
      },
    };
    console.log('child-constructor');
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log('Namaste react OP');
    }, 1000);
    console.log('child-componentDidMount');
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('component will unmount');
  }

  render() {
    console.log('child-render');
    return (
      <div>
        <h1>Profile class component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>name : {this.state.userInfo.name}</h2>
        <h3>login : {this.state.userInfo.login}</h3>
      </div>
    );
  }
}

export default ProfileClass;
