import React, { useEffect, useContext } from "react";

import { Context } from '../context';

import { useRouter } from 'next/router';

import axios from 'axios';

export default function Auth() {
  const { username, email, secret, confirmSecret, setUsername, setEmail, setSecret, setConfirmSecret, privateKey } = useContext(Context);

  const router = useRouter()

  useEffect(() => {
    document.title = "HuskaChat | Auth"
  });

  function onSubmit(e) {
    e.preventDefault()

    if (username.length === 0 || email.length === 0 || secret.length === 0 || confirmSecret.length === 0) return

    if (secret != confirmSecret) return

    axios({
      method: 'post',
      url: 'https://api.chatengine.io/users/',
      headers: { 'Private-key': privateKey },
      data: {
        username: username,
        secret: secret,
        email: email
      }
    })
    .then(r => router.push('/chats'))
  }
  return (
    <div className="background">
      <div className="auth-container big-container">
        <form className="auth-form" onSubmit={ (e) => onSubmit(e) }>
          <div className="auth-title">HuskaChat</div>

          <div className="input-container">
            <input
              placeholder="Username"
              className="text-input"
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={e => setEmail(e.target.value)}
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

          <div className="input-container">
            <input
              type="password"
              placeholder="Confirm Password"
              className="text-input"
              onChange={e => setConfirmSecret(e.target.value)}
            />
          </div>

          <button
          type="submit"
          className="submit-button"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
