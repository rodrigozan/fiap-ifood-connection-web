import React from "react";
import { Link } from "react-router-dom";

// components

export default function CardProductSingle(props) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-0 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-4 py-3">
          <div className="text-center flex justify-between">
            <h6 className="text-red-700 text-xl font-bold">{props.title}</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-4">
          <form>
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
                    defaultValue={props.name}
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
                    defaultValue={props.price}
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
                    defaultValue={props.description}
                  ></textarea>
                </div>
                <button
                  className="bg-red-600 ifood-box-auth text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
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
        </div>
      </div>
    </>
  );
}
