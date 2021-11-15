import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios'

import AuthService from '../../services/Auth/AuthService'

import Field from '../Forms/Field'

const Register = ({ onSubmit }) => {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      responsible: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      cpf: "23.591.658/0001-10",
      phone: {
        ddd: 12,
        number: 988653245
      }
    };

    console.log(data)

    const token = localStorage.getItem('ifood:token')

    const config = {
      headers:
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }

    axios.post(
      "http://localhost:3500/owner", 
      data,
      config
      )
    .then(data => console.log(data))
    .catch(err => console.log(err))

    /*AuthService.register(data.responsible, data.password, data.cpf, data.email, data.phone)
      .then(user => {
        console.log(user)
        const token = localStorage.setItem('ifood:token', user.data.token)
        const setUser = localStorage.setItem('ifood:user', JSON.stringify(user.data))
        console.log(`Token: ${localStorage.getItem('ifood:token')}`)
        window.location.href = "/admin/produtos"
      })
      .catch(err => console.log(err))*/
  };
  return (
    <form onSubmit={handleSubmit} >
      <Field ref={nameRef} label="Nome" type="text" />
      <Field ref={emailRef} label="Email:" type="text" />
      <Field ref={passwordRef} label="Password:" type="text" />
      <div className="text-center mt-6">
        <button
          className="border-2 border-0 bg-red-600 text-white active:bg-blueGray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
          type="submit"
        >
          Continuar
        </button>
      </div>
     
    </form>
  );
};

export default Register