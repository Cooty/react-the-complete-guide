import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    console.log(`User ID: ${this.props.id} will unmount`);
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// Same as this
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
