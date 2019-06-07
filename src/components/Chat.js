import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import { fetchMessages, fetchMe } from '../store/actions';

import './Chat.css';

export const WebsocketConnected = Symbol('WebsocketConnected');
export const WebsocketDisconnected = Symbol('WebsocketDisconnected');
export const NewMessage = Symbol('NewMessage');

let socket = null;

function Chat({token, me, messages, isWebsocketConnected, dispatch, fetchMessages, fetchMe}) {
  const [message, setMessage] = useState('');
  const chatHistory = useRef(null);
  const messagesList = useRef(null);
  
  useEffect(() => {
    socket = io(`?token=${token}`);

    fetchMessages();
    fetchMe();

    socket.on('connect', () => {
      dispatch({type: WebsocketConnected});
    });

    socket.on('disconnect', () => {
      dispatch({type: WebsocketDisconnected});
    });
  
    socket.on('user_message', message => {
      dispatch({type: NewMessage, message});
    });
  }, []);

  useEffect(() => {
    chatHistory.current.scrollTop = messagesList.current.scrollHeight;
  }, [messages]);
  
  function onSubmit(event) {
    event.preventDefault();
  
    if (!isWebsocketConnected) return;
    if (!message) return;

    socket.emit('message', message);
    setMessage('');
  }
  
  return (
    <main className="container">
      <div style={{minHeight: '100vh'}} className="row justify-content-center">
        <div className="col" style={{display: 'flex', flexDirection: 'column'}}>
          <div className="alert alert-info">Состояние:
            <span>{isWebsocketConnected ? ' подключен' : ' не подключен'}</span>
          </div>

          {!me.fetching &&
            <p>name: {me.data.displayName}</p>
          }

          <div className="chat">
            <div className="chat-history" ref={chatHistory}>
              <ul className="messages" ref={messagesList}>
                {messages.fetching &&
                  <div className="spinner-border" role="status"></div>
                }
                {!messages.fetching && messages.list.length === 0 &&
                  <p className="text-muted">Сообщений пока нет</p>
                }

                {messages.list.map(message => {
                  return (
                    <li className="clearfix">
                        <div className="message-data">
                          <span className="message-data-time">{formatDate(message.date)}</span>
                          <span class="message-data-name">{message.user}</span>
                        </div>
                        <div className="message message-my">{message.text}</div>
                    </li>
                  );
                })}
              </ul>

              <form className="chat-message clearfix" onSubmit={onSubmit}>
                <textarea
                  disabled={!isWebsocketConnected}
                  value={message}
                  onChange={event => setMessage(event.target.value)}
                  placeholder="Введите ваше сообщение" 
                  rows="3" />
                <button
                  type="submit"
                  disabled={!isWebsocketConnected}>
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    token: state.token,
    me: state.me,
    messages: state.messages,
    isWebsocketConnected: state.isWebsocketConnected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ fetchMessages, fetchMe }, dispatch)
  };
}

function formatDate(date) {
  const d = new Date(date);
  return `${d.getHours()}:${d.getMinutes()}`;
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
