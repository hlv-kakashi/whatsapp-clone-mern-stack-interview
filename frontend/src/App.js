import React, { useEffect, useState } from "react";
import './css/App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  const [messages, setMessages] = useState([]);
  const [lastmessage, setLastmessage] = useState([]);
  console.log("entered app.js")

  useEffect(() => {
    axios.get("/messages/sync")
      .then(response => {
        console.log("message downloading.....",response.data[response.data.length-1].message)

        setMessages(response.data);
        setLastmessage(response.data[response.data.length-1].message);
      });
  }, []);


  useEffect(() => {
    const pusher = new Pusher('1676f05024eba4cb1772', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
      setLastmessage(newMessage.message)
    });
    

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages]);


  return (
    <div className="app">
      <div className="app_body">
        <Sidebar lastmessage={lastmessage} />
        <Chat messages={messages}/>
      </div>
    </div>
    
  );
}

export default App;
