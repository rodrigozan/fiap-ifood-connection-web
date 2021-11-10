import React from 'react';
import ReactDOM from 'react-dom';
import bcrypt from 'bcrypt';

import AuthService from '../../services/Auth/AuthService'

import Field from '../Forms/Field'

const Login = ({ onSubmit }) => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const bcPassword = bcrypt.compareSync(passwordRef.current.value, hash);
    const data = {
      email: emailRef.current.value,
      password: bcPassword,
    };

    AuthService.register(data.email, data.password)
      .then(user => {
        console.log(user)
        let getToken = localStorage.getItem('ifood:token')
        if (getToken) {
          return
        }
        const token = localStorage.setItem('ifood:token', user.data.token)
        const setUser = localStorage.setItem('ifood:user', JSON.stringify(user.data))
        console.log(`Token: ${localStorage.getItem('ifood:token')}`)
        console.log(`User: ${localStorage.getItem('ifood:user')}`)
        window.location.href = "/admin/produtos"
      })
      .catch(err => console.log(err))
  };
  return (
    <form onSubmit={handleSubmit} >
      <Field ref={emailRef} label="Email:" type="text" />
      <Field ref={passwordRef} label="Password:" type="password" />
      <div className="text-center mt-6">
        <button
          className="border-2 border-0 bg-red-600 text-white active:bg-blueGray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
          type="submit"
        >
          Entrar
        </button>
      </div>
    </form>
  );
};

export default Login