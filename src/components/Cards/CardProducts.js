import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

// Services

import api from '../../services/ifoodApi'

// Components 

import Actions from '../Buttons/Actions'

// Styles

import "../../styles/ifood.scss"

export default function CardProducts(props) {

  const [product, setProduct] = useState()
  const [alert, setAlert] = useState(false)
  const [showModal, setShowModal] = React.useState(false);

  function handleHideAlert() {
    setAlert(false)
  }

  const handleRemove = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('ifood:token')
    const headers = {
      'Authorization': `Bearer ${token}`
    };

    axios.delete('http://localhost:3500/products', { headers })
      .then(response => console.log(response))
      .catch(err => {
        console.log(err)
        setAlert(true)
      })
  }

  const Actions = () => {
    function textColors(color, force, action) {
      const className = `border-transparent p-3 pl-0 text-${color}-${force} ${action}`
      return className
    }

    return (
      <div className="container">
        <div className="flex justify-start">
          <Link to="/admin/produto/123">
            <div
              className={textColors("amber", "500", "edit")}
            >
              <i className="fas fa-edit"></i>
            </div>
          </Link>
          <button
            className={textColors("red", "700", "delete")}
            onClick={() => setShowModal(true)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    )
  }


  useEffect(() => {
    const token = localStorage.getItem('ifood:token')
    const headers = {
      'Bearer': `${token}`
    };

    console.log(headers)

    axios.get('http://localhost:3500/products', { headers })
      .then(response => console.log(response))
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Excluir Produto
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="w-full relative p-6 flex-1">
                  <p className="my-4 px-2 text-blueGray-500 text-lg text-center leading-relaxed">
                    Você está prestes a excluir o produto <span className="text-red-700">Feijoada</span>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 py-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Voltar para Produtos
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Excluir Produto
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="text-center flex justify-between">
            <h6 className="text-red-700 text-xl font-bold">Produtos</h6>
            <Link
              to="/admin/cadastrar-produto"
              className="bg-white ifood-box-auth text-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
              Novo Produto
            </Link>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr className="bg-red-300">
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Prato
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Descrição
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Preço
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  <span className="font-bold text-blueGray-600">
                    {product?.plate} Feijoada
                  </span>
                </th>
                <td className="description border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {product?.description} Uma feijoada deliciosa
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {product?.price} R$ 19,99
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <Actions />
                  <span className="hidden">
                    {product?.establishmentId}
                  </span>
                </td>
              </tr>
              {alert ?
                <tr>
                  <td colSpan="4" className="border-t-0 bg-red-600 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    <span className="font-bold text-white">
                      Não foi possível deletar o produto
                    </span>
                  </td>
                </tr>
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
