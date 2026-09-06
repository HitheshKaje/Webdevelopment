import UserList from "../components/UserList";


const User = () => {
  const USERS = [{ id: 'u1', name: 'John Doe', image: 'https://example.com/john.jpg', places: 3 }];
  return (
    <UserList items={USERS} />
  )
}

export default User