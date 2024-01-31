import '../App.css';
import React, { useState } from 'react'


export default function ChatUI(){

     const feathers = require('@feathersjs/feathers');
    //  const socketio = require('@feathersjs/socketio');

    let hide = {
        display: 'none',
    }
    let show = {
        display: 'block'
    }
    //   let textRef = React.createRef()
    //   const {messages} = props
    
      const [chatopen, setChatopen] = useState(false)
      const toggle = e => {
        setChatopen(!chatopen)
      }

     // Socket.io setup
    //  const socket = socketio('http://localhost:3030');

    //  // Init feathers app
    //  const app = feathers();

     // Register socket.io to talk to server
    //  app.configure(feathers.socketio(socket));

    //  document.getElementById('form').addEventListener('submit', sendIdea);

    //  async function sendIdea(e) {
    //    e.preventDefault();

    //    const text = document.getElementById('idea-text');
    //    const tech = document.getElementById('idea-tech');
    //    const viewer = document.getElementById('idea-viewer');

    //    // Create new idea
    //    app.service('messages').create({
    //      text: text.value,
    //      tech: tech.value,
    //      viewer: viewer.value
    //    });

    //    // Clear inputs
    //    text.value = '';
    //    tech.value = '';
    //    viewer.value = '';
    //  }

    //  function renderIdea(idea) {
    //    document.getElementById(
    //      'ideas'
    //    ).innerHTML += `<div class="card bg-secondary my-3">
    //          <div class="card-body">
    //            <p class="lead">
    //              ${idea.text} <strong>(${idea.tech})</strong>
    //              <br />
    //              <em>Submitted by ${idea.viewer}</em>
    //              <br />
    //              <small>${idea.time}</small>
    //            </p>
    //          </div>
    //        </div>`;
    //  }

    //  async function init() {
    //    // Find ideas
    //    const ideas = await app.service('messages').find();

    //    // Add existing ideas to list
    //    ideas.forEach(renderIdea);

    //    // Add idea in realtime
    //    app.service('messages').on('created', renderIdea);
    //  }

    //  init();
    
    return(
        <>
            <form id="form">
            <div id='chatCon'>
                <div class="chat-box" style={chatopen ? show : hide}>
                    <div class="header">Chat with me</div>
                    <div class="form-group">
              <input
                type="text"
                id="idea-text"
                placeholder="Enter idea (30 chars max)"
                maxlength="30"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="idea-tech"
                placeholder="Language, framework, etc"
                maxlength="30"
                required
              />
            </div>

            <div class="form-group">
              <input
                type="text"
                id="idea-viewer"
                placeholder="Enter your name"
                maxlength="20"
                required
              />
            </div>

            <button type="submit">
              Suggest Idea
            </button>
                    <div class="footer">
                    </div>
                </div>
                <div class="pop">
                    <p><img onClick={toggle} src="https://p7.hiclipart.com/preview/151/758/442/iphone-imessage-messages-logo-computer-icons-message.jpg" alt="" /></p>
                </div>
            </div>
            </form>
        </>
    )
}

