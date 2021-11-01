import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { email } = props;
  console.log(props);
  return (
    <div>
      <h1>
        Bem Vindo:
        {email}
      </h1>
      <h2>Aqui estão suas tarefas:</h2>
    </div>
  );
};

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Header;
