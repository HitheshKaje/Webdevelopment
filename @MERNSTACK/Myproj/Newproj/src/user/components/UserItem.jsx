import './UserItem.css';

const UserItem = ({ id, image, name, placeCount }) => {
  return (
    <li key={id} className="user-item">
      <div className="user-item__content">

        <img
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80"
          alt={name}
          className="user-item__image"
        />

        <h2>{name}</h2>

        <p>
          {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
        </p>

      </div>
    </li>
  );
};

export default UserItem;