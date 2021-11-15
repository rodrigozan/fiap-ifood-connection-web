import React, { useState } from "react";

import Register from '../../components/Auth/Register'
import Login from '../../components/Auth/Login'

// Styles

import "../../styles/ifood.scss"

export default function AuthView() {
  const [login, setLogin] = useState(true)
  const [register, setRegister] = useState(false)

  localStorage.setItem('ifood:token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQ3NjM3NzgwLCJpYXQiOjE2MzY1NzY3MDYsImV4cCI6MTYzNzE4MTUwNn0.bbZ45Va0oaHapuL4Th495_BHhewF4_oPUSB-OwLY-eE")

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
