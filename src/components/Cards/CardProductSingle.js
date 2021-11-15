import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import api from '../../services/ifoodApi'

import "../../styles/ifood.scss"

export default function CardProductSingle(props) {
  const [formData, setFormData] = useState({
    place: "",
    description: "",
    price: "",
    type: ""
  })
  const [place, setPlace] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [type, setType] = useState("")
  const [alert, setAlert] = useState(false)
  const [sucess, setSucess] = useState(false)

  function handleHideAlert() {
    setAlert(false)
  }

  function handleHideSucess() {
    setSucess(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODAyMDU1NjAsImlhdCI6MTYzNjU5NzY3MSwiZXhwIjoxNjM3MjAyNDcxfQ.2KxB9tNMsBv0btO7xbhQPKJea8JVVk4IjQhcf4LfBS0"
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    console.log(formData)
    console.log(headers)
    axios.post('http://localhost:3500/products', formData, headers)
      .then(response => {
        console.log(response)
        setSucess(true)
      })
      .catch(err => {
        console.log(err)
        setAlert(true)
      })
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-4 py-3">
          <div className="text-center flex justify-between">
            <h6 className="text-red-700 text-xl font-bold">{props.title}</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nome do Produto
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formData.place}
                    name="place"
                    onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Preço
                  </label>
                  <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formData.price}
                    name="price"
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Tipo
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formData.type}
                    name="price"
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Descrição
                  </label>
                  <textarea
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={formData.description}
                    name="description"
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  ></textarea>
                </div>
                <button
                  className="bg-red-600 ifood-box-auth text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  {props.action}
                </button>
                <Link
                  className="ifood-box-auth text-blueGray-500 font-bold uppercase text-xs px-4 py-2 mt-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  to="/admin/produtos"
                >
                  Voltar para Produtos
                </Link>
              </div>
            </div>
            <hr className="mt-4 border-b-1 border-blueGray-300" />
          </form>
          {alert ?
            <div className="border-t-0 bg-red-600 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex justify-between">
              <span className="font-bold text-white">
                Não foi possível {props.message} o produto, por favor, tente novamente mais tarde
              </span>
              <button onClick={handleHideAlert} className="font-bold text-white">
                <i class="fas fa-window-close"></i>
              </button>
            </div>
            : null}
          {sucess ?
            <div className="border-t-0 bg-emerald-700 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex justify-between">
              <span className="font-bold text-white">
                Produto {props.msgSucess} com sucesso!
              </span>
              <button onClick={handleHideSucess} className="font-bold text-white">
                <i class="fas fa-window-close"></i>
              </button>
            </div>
            : null}
        </div>
      </div>
    </>
  );
}
