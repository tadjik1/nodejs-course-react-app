import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Collapse} from 'reactstrap';
import cx from 'classnames';
import ChatInner from './ChatInner';

function Chat({isCollapsed, isFixed}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={cx("chat", {"fixed": isFixed})}>
      {isCollapsed && (
        <div className="chat__header" onClick={handleToggleCollapse}>
          Have a question?
          <img src="/assets/icons/icon-chat-white.svg" alt="icon-chat" />
        </div>
      )}
      {isCollapsed
        ? <Collapse isOpen={isOpen}>
          <ChatInner />
        </Collapse>
        : <ChatInner />
      }
    </div>
  );
}

Chat.propTypes = {
  isCollapsed: PropTypes.bool,
  isFixed: PropTypes.bool
};

export default Chat;
