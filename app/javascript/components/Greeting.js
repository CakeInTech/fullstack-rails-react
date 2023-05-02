import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../actions/greetingsAction';

const Greeting = ({ message, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div className="d-flex justify-content-center align-items-center greeting-container w-100 h-100">
      <h1 className="greeting-message">{message}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
