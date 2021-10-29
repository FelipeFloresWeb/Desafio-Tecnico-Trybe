import React from 'react';

// src Image: https://images-na.ssl-images-amazon.com/images/I/41da3NERJ4L.png
import todoLogo from '../../images/todoLogo.png';

const Header = () => (
  <div>
    <img id="todo-logo" src={todoLogo} alt="To Do Logo" />
  </div>
);

export default Header;
