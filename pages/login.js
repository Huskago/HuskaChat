import React, { useEffect, useContext } from "react";

import { Context } from '../context';

import { useRouter } from 'next/router';

import axios from 'axios';

import dotenv from "dotenv";

export default function Auth() {
  const { username, secret, email,  setUsername, setEmail, setSecret } = useContext(Context);

  const router = useRouter()

  useEffect(() => {
    document.title = "HuskaChat | Auth"
  });

  function onSubmit(e) {

    e.preventDefault()

    if (username.length === 0 || secret.length === 0) return

    axios({
      method: 'get',
      url: 'https://api.chatengine.io/users/me/',
      headers: {
        'Project-ID': process.env.PROJECT_ID,
        'User-Name': username,
        'User-Secret': secret
     }
    })
    .then(r => router.push('/chats'))
  }
  return (
    <div className="background">
      <div className="auth-container medium-container">
        <form className="auth-form" onSubmit={ (e) => onSubmit(e) }>
          <div className="auth-title">HuskaChat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={e => setSecret(e.target.value)}
            />
          </div>

          <button
          type="submit"
          className="submit-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
