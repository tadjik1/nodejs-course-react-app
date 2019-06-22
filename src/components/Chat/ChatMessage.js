import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

const ChatMessage = ({income, outcome, date, from, message}) => (
  <div className={cx("chat__message", {'-income': income, '-outcome': outcome})}>
    <div className="chat__message--date">{from} @ {date}</div>
    <div className="chat__message--inner">
      {message}
    </div>
  </div>
);

ChatMessage.propTypes = {
  // message: PropTypes.string.isRequired
};

export default ChatMessage;