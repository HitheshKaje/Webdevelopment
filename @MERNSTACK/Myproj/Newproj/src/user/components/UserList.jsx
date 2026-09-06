import './UserList.css';
import UserItem from './UserItem';
import Card from '../../shared/componenets/Card/Card1';
const UserList = (props) => {
    if(props.items.length === 0){
        return (
            <div className='user-list center'>
                <Card>

                <h2>No Users Found</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className='user-list'>
            {props.items.map((user) => (
                <UserItem key={user.id} id={user.id} name={user.name} image={user.image} placeCount={user.places}     />
            ))}
        </ul>
    );
};

export default UserList;