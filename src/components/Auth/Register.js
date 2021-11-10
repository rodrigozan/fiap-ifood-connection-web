import React from 'react';
import ReactDOM from 'react-dom';

import AuthService from '../../services/Auth/AuthService'

import Field from '../Forms/Field'

const Register = ({ onSubmit }) => {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      cnpj: "23.591.658/0001-10",
      address: {
        street: "Rua 1",
        number: 123,
        neighborhood: "Galo Branco",
        cep: "12247480",
        city: "São josé dos Campos",
        state: "São Paulo",
        country: "Brasil"
      },
      phones: {
        ddd: "12",
        number: "988653245"
      }
    };

    AuthService.register(data.name, data.email, data.password, data.cnpj, data.address, data.phones)
      .then(user => {
        console.log(user)
        const token = localStorage.setItem('ifood:token', user.data.token)
        const setUser = localStorage.setItem('ifood:user', JSON.stringify(user.data))
        console.log(`Token: ${localStorage.getItem('ifood:token')}`)
        window.location.href = "/admin/produtos"
      })
      .catch(err => console.log(err))
  };
  return (
    <form onSubmit={handleSubmit} >
      <Field ref={nameRef} label="NOme:" type="text" />
      <Field ref={emailRef} label="Email:" type="text" />
      <Field ref={passwordRef} label="Password:" type="password" />
      <div className="text-center mt-6">
        <button
          className="border-2 border-0 bg-red-600 text-white active:bg-blueGray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
          type="submit"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
};

export default Register