import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { name } = props;
  return (
    <div>
      <h1>
        Bem Vindo:
        {` ${name}`}
      </h1>
      <h2>Aqui estão suas tarefas:</h2>
    </div>
  );
};

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Header;
