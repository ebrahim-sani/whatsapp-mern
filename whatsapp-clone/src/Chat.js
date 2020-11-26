import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Chat.css";
import { SearchOutlined, MoreVert, AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios"

function Chat({messages}) {
  const [input, setInput] = useState("")
  const sendMessages = (e) => {
    e.preventDefault()

    await axios.post("/messages/new", {
      messages: input,
      name: "User",
      timstamp:"Just now",
      received: false

    })
    setInput("")
  } 
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="./git.png" />

        <div className="chat__headerInfo">
          <h3>Github Community</h3>
          <p>Last seen at..</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message chat__reciever">
          <span className="chat__name">Ebrahim</span>
          Hi guys..
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Aaron</span>
          How are you doing ebrahim
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Ebrahim</span>
          I'm doing fine bro
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Jenny</span>
          Hey Aaron & ebrahim
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Ebrahim</span>
          How are you Jenny
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Jenny</span>
          I'm fine
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Aaron</span>
          Jenny, have you complete that project?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Jenny</span>
          No
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Aaron</span>
          What about you ebrahim?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Ebrahim</span>
          Yeah, I'm done.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Aaron</span>
          You're so genius dude
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Jenny</span>
          Good job ebrahim.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Ebrahim</span>
          Thank you all.
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>

        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
