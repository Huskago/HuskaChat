import React, { useEffect, useContext } from "react";

import { Context } from '../context';

import { useRouter } from 'next/router';

import axios from 'axios';

export default function Auth() {

  const router = useRouter()

  useEffect(() => {
    document.title = "HuskaChat | Auth"
  });

  function onSubmit(e, newUser) {
    e.preventDefault()

    if (newUser) {
      router.push('/register')
    } else {
      router.push('/login')
    }
  }
  return (
    <div className="background">
      <div className="auth-container small-container">
        <form className="auth-form">
          <div className="auth-title">HuskaChat</div>
            
          <div className="selection-button">
            <button
              type="submit"
              className="submit-button"
              onClick={ (e) => onSubmit(e, false) }
            >
              Login
            </button>

            <button
              type="submit"
              className="submit-button"
              onClick={ (e) => onSubmit(e, true) }
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
