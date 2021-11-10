import React, { useState } from "react";
import { Redirect } from "react-router";

import Register from '../../components/Auth/Register'
import Login from '../../components/Auth/Login'

// Services 

import AuthService from '../../services/Auth/AuthService'

// Styles

import "../../styles/ifood.scss"

export default function AuthView() {
  const [login, setLogin] = useState(true)
  const [register, setRegister] = useState(false)

  const clickShowLogin = () => {
    console.log("clicou no login")
    setLogin(true)
    setRegister(false)
  }

  const clickShowRegister = () => {
    console.log("clicou no register")
    setRegister(true)
    setLogin(false)
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      return
    }

    AuthService.login(email, password)
      .then(data => {
        localStorage.setItem('ifood:token', data.token)
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  const ShowLogin = () => (

    <div className="flex-auto px-4 lg:px-10 py-10 pt-2">

      <div className="text-center mb-3">
        <h3 className="text-blueGray-600 font-bold ifood-title">Portal do Parceiro</h3>
        <p className="text-blueGray-400">Insira seu e-mail e senha para conectar-se</p>
      </div>

      <form onSubmit={handleLoginSubmit}>
        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Email
          </label>
          <input
            type="email"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Email"
            onChange={handleChangeEmail}
          />
        </div>

        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Senha
          </label>
          <input
            type="password"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Senha"
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              id="customCheckLogin"
              type="checkbox"
              className="form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
            />
            <span className="ml-2 text-sm font-semibold text-blueGray-600">
              Lembre de mim
            </span>
          </label>
        </div>

        <div className="text-center mt-6">
          <button
            className="bg-red-600 text-white active:bg-red-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="submit"
          >
            Entrar
          </button>
        </div>
        <div className="text-center mt-6">
          <button
            className="border-2 border-red-600 bg-blueGray-100 text-red-600 active:bg-blueGray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="button"
            onClick={clickShowRegister}
          >
            Cadastre-se
          </button>
        </div>
      </form>
      <a
        href="#pablo"
        onClick={(e) => e.preventDefault()}
        className="text-blueGray-600"
      >
        <small>* Esqueci minha senha</small>
      </a>
    </div>
  )

  const handleRegisterSubmit = (e) => {

    e.preventDefault()

    const cnpj = "23.591.658/0001-10"
    const address = {
      street: "Rua 1",
      number: 123,
      neighborhood: "Galo Branco",
      cep: "12247480",
      city: "São josé dos Campos",
      state: "São Paulo",
      country: "Brasil"
    }
    const phones = {
      ddd: "12",
      number: "988653245"
    }

    console.log(`Nome: ${name}\nEmail: ${email}\nSenha:${password}`)

    AuthService.register(name, email, password, cnpj, address, phones)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  const ShowRegister = () => (

    <div className="flex-auto px-4 lg:px-10 py-10 pt-2">

      <div className="text-center mb-3">
        <h3 className="text-blueGray-600 font-bold ifood-title">Portal do Parceiro</h3>
        <p className="text-blueGray-400">Insira seus dados para iniciar seu registro</p>
      </div>

      <Register />
      <a
        href="#pablo"
        onClick={(e) => e.preventDefault()}
        className="text-blueGray-600"
      >
        <small onClick={clickShowLogin}>* Já tem conta? Clique aqui para entrar.</small>
      </a>
    </div>
  )

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-3 shadow-lg rounded-lg ifood-box-auth">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-2">

                <div className="text-center mb-3">
                  <h3 className="text-blueGray-600 font-bold ifood-title">Portal do Parceiro</h3>
                  <p className="text-blueGray-400">Insira seus dados para iniciar seu registro</p>
                </div>
                {login ?
                  <>
                    <Login />
                    <div className="text-center mt-6">
                      <button
                        className="border-2 border-red-600 bg-blueGray-100 text-red-600 active:bg-blueGray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        onClick={clickShowRegister}
                      >
                        Cadastre-se
                      </button>
                    </div>
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-blueGray-600"
                    >
                      <small>* Esqueci minha senha</small>
                    </a>
                  </>
                  :
                  <>
                    <Register />
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-blueGray-600"
                    >
                      <small onClick={clickShowLogin}>* Já tem conta? Clique aqui para entrar.</small>
                    </a>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
