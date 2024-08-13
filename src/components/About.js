import ProfileClass from './ProfileClass';
import ProfileFunctional from './ProfileFunctional';
import { Component } from 'react';
import UserContext from '../utils/UserContext';

// const About2 = () => {
//   return (
//     <div>
//       <h1>About us page</h1>
//       <p>This is the about page of foodie</p>
//       <ProfileFunctional name="Anand function" />
//       <ProfileClass name="Anand class" />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    console.log('parent-constructor');
  }
  componentDidMount() {
    console.log('parent-componentDidMount');
  }

  render() {
    console.log('parent-render');
    return (
      <div className="mt-32 text-center">
        <h1>About us page</h1>
        <UserContext.Consumer>
          {({ user }) => <h3 className="font-bold">{user.name}</h3>}
        </UserContext.Consumer>
        <p>This is the about page of foodie</p>
        <ProfileFunctional name="Anand function" />
      </div>
    );
  }
}

export default About;
