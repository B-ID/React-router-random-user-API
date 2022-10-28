import React from 'react';

const User = ({ user }) => {
  return (
    <div className="userData">
      <hr />
      <img src={`${user.picture.medium}`} alt="picture" />
      <p>{`Full Name: ${user.name.first} ${user.name.last}`} </p>
      <p>{`Phone: ${user.phone}`}</p>
    </div>
  );
};

export default User;
