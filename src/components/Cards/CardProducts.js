import React from "react";
import { Link } from "react-router-dom";

// Styles

import "../../styles/ifood.scss"

export default function CardProducts(props) {

  const Actions = () => {
    const [edit, setEdit] = ('')
    const [remove, setRemove] = ('')
    const [view, setView] = ('')

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
              <i class="fas fa-edit"></i>
            </div>
          </Link>
          <button
            className={textColors("red", "700", "delete")}
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    )
  }


  return (
    <>
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
          {/* Projects table */}
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
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={require("assets/img/feijoada.jpg").default}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span className="ml-3 font-bold text-blueGray-600">
                    Feijoada
                  </span>
                </th>
                <td className="description border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  R$ 35,99
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <Actions />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
