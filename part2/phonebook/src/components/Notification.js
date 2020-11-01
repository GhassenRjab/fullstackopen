import React from 'react';

const baseStyle = {
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const styles = {
  info: {
    ...baseStyle,
    color: "green",
  },
  error: {
    ...baseStyle,
    color: "red",
  },
};

const Notification = ({ type, message }) => {
  if (!message) {
    return null;
  };

  return (
    <div style={styles[type]} className="notification">
      {message}
    </div>
  )
};

export default Notification;
