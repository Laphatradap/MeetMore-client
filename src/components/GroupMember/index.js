import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroup } from "../../actions/group";
import { fetchUsers } from "../../actions/members";
import Member from "./Member";

export default function GroupMemberContainer(props) {
  console.log("OUTPUT: GroupMemberContainer -> props", props)
  // Fetch users and group info from redux state
  const users = useSelector(state => state.member.users);
  const group = useSelector(state => state.group);
  const members = useSelector(state => state.member.members);
  console.log("OUTPUT: GroupMemberContainer -> members", members)

  // Call actions to get users list and the group info
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchGroup(Number(props.groupId)));
  }, []);

  // render member template to user for both friends list & member list
  const RenderMembers = (members, Component) => {
    return members.map(el => (
      <Component key={el.id} users members username={el.username} id={el.id} />
    ));
  };

  if (!users) return "Loading..";
  if (!group) return null;
  return (
    <div>
      {/* <h1>{group.map(g => g.groupName)}</h1> */}
      <div>{RenderMembers(users, Member)}</div>
      <div>{RenderMembers(members, Member)}</div>
    </div>
  );
}

// class GroupMemberContainer extends React.Component {
//   componentDidMount() {
//     this.props.fetchUsers();
//     this.props.fetchGroup(Number(this.props.match.params.id));
//   }

// state = {
//   member: [{
//     id: ""
//   }]
// }

// onSubmit = event => {
//   event.preventDefault()
//   this.props.addMember(this.state.member.id)
// }

//   render() {
//     if (!this.props.users) return "loading";
//     if (!this.props.group) return null;
//     return (
//       <div>
//         <div>
//           <h1>{this.props.group.map(g => g.groupName)}</h1>
//         </div>
//         <p>Your Friend List</p>
//         {this.props.users.map(user => (
//           <div key={user.id}>
//             <p>{user.username}</p>
//             <button onClick={() => this.props.addMember}>Add to group</button>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   console.log("state of groupDetails", state);
//   return {
//     group: state.group,
//     users: state.users
//   };
// };

// export default connect(mapStateToProps, { fetchUsers, fetchGroup, addMember })(
//   GroupMemberContainer
// );
