import React/* , { useState } */ from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Tasks from '../components/Tasks/Tasks';
// this.props.location.state
const Main = (props) => {
  const { location: { state: { email } } } = props;
  // const [user, setUser] = useState(false);
  // const [haveAccount, setHaveAccount] = useState(false);
  console.log(email);
  return (
    <div>
      <Header email={email} />
      <Tasks />
    </div>
  );
};

Main.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Main;
