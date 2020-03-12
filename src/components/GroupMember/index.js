import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

// import { fetchUsers } from "../../actions/users";
import { fetchGroup } from "../../actions/group";
// import { addMember } from "../../actions/members";
// import Member from "./Member";

// export default function GroupMemberContainer() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchUsers());
//     dispatch()
//   }, []);
//   const users = useSelector(state => state.users);

//   if (!users) return null;
//   return (
//     <div>
//       {users.map(user => (
//         <ul key={user.id}>
//           <li>{user.username}</li>
//           <p>{user.id}</p>
//           <button onClick={() => dispatch(addMember(user.id))}>Add to group</button>
//         </ul>
//       ))}
//       {/* <Member /> */}
//     </div>
//   );
// }

class GroupMemberContainer extends React.Component {
  componentDidMount() {
    // this.props.fetchUsers();
    // // this.props.fetchGroup(Number(this.props.match.params.id))
    // console.log("params", this.props)
    this.props.fetchGroup(Number(this.props.match.params.id));
  }

  // state = {
  //   member: []
  // }

  // onSubmit = event => {
  //   event.preventDefault()
  //   this.props.addMember(this.state.member)
  // }

  render() {
    // if (!this.props.users) return "loading";
    if (!this.props.group) return null;
    // const { groupName } = this.props.group;
    return (
      <div>
        {this.props.group.map(g => g.groupName)}
      </div>

      // <div>
      //   <div>
      //     <p>{groupName}</p>
      //   </div>
      //   <p>Your Friend List</p>
      //   {this.props.users.map(user => (
      //     <div key={user.id}>
      //       <p>{user.username}</p>
      //       {/* <button onSubmit={this.onSubmit}>Add to group</button> */}
      //     </div>
      //   ))}
      // </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state of groupDetails", state);
  return {
    group: state.group
  };
};

export default connect(mapStateToProps, { fetchGroup })(
  GroupMemberContainer
);
