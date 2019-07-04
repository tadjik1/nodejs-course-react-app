import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Collapse} from 'reactstrap';
import cx from 'classnames';
import ChatInner from './ChatInner';
import io from 'socket.io-client';
import {bindActionCreators} from 'redux';
import {WebsocketConnected, WebsocketDisconnected, Message} from '../../store/modules/chat/constants';
import {fetchMessages} from '../../store/modules/chat/actions';

let socket = null;

function Chat({token, isWebsocketConnected, messages, isCollapsed, isFixed, dispatch, fetchMessages}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchMessages();
    
    socket = io(`http://localhost:3001?token=${token}`);
    
    socket.on('connect', () => {
      dispatch({type: WebsocketConnected});
    });
    
    socket.on('disconnect', () => {
      dispatch({type: WebsocketDisconnected});
    });
    
    socket.on('message', message => {
      dispatch({type: Message, message});
    });
  }, []);

  function handleToggleCollapse() {
    setIsOpen(!isOpen);
  }
  
  function sendMessage(msg) {
    socket.emit('message', msg);
  }

  return (
    <div className={cx("chat", {"fixed": isFixed})}>
      {isCollapsed && (
        <div className="chat__header" onClick={handleToggleCollapse}>
          Есть вопрос?
          <img src="/assets/icons/icon-chat-white.svg" alt="icon-chat" />
        </div>
      )}
      {isCollapsed
        ? <Collapse isOpen={isOpen}>
          <ChatInner isWebsocketConnected={isWebsocketConnected} sendMessage={sendMessage} messages={messages} />
        </Collapse>
        : <ChatInner isWebsocketConnected={isWebsocketConnected} sendMessage={sendMessage} messages={messages} />
      }
    </div>
  );
}

Chat.propTypes = {
  isCollapsed: PropTypes.bool,
  isFixed: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    isWebsocketConnected: state.chat.isWebsocketConnected,
    messages: state.chat.messages,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({fetchMessages}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
