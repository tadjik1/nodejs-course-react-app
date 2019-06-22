import React, {useEffect} from 'react';
import {Button, Form, Input} from 'reactstrap';
import ChatMessage from './ChatMessage';
// import Loader from '../Loader';
// import {fetchMessages} from "../../store/modules/chat/actions";
// import {connect} from "react-redux";

const ChatInner = ({messages, fetchMessages}) => {
  // useEffect(() => {
  //   fetchMessages();
  // }, []);
  //
  // if (!messages.length) {
  //   return <Loader />;
  // }

  return (
    <div className="chat__inner">
      <div className="chat__body">
        {/* TODO: push real messages to component below */}
        {/*<ChatMessages messages={messages} />*/}
        {/*{JSON.stringify(messages)}*/}
        <ChatMessage income date="16:45" from="AnyShop" message="Hello there" />
        <ChatMessage outcome date="16:47" from="you" message="Hey" />
        <ChatMessage income date="16:50" from="AnyShop" message="Bye" />
      </div>
      <div className="chat__footer">
        <Form className="form-inline form-inline-flex">
          <Input className="form-control mr-2" type="text" />
          <Button type="submit" color="link" className="btn btn-send">
            <img src="/assets/icons/icon-send.svg" alt="" />
          </Button>
        </Form>
      </div>
    </div>
  )
};

// function mapStateToProps(state) {
//   return { messages: state.messages };
// }
//
// const mapDispatchToProps = { fetchMessages };
//
// export default connect(mapStateToProps, mapDispatchToProps)(ChatInner);

export default ChatInner;