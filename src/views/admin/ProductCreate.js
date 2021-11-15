import React, { useState } from "react";

// components

import CardProductSingle from "components/Cards/CardProductSingle.js";
import api from '../../services/ifoodApi'

export default function ProductCreate() {

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardProductSingle
            title="Cadastrar Produto"
            action="Cadastrar"
            name="Nome do Produto"
            price="0.00"
            description="Descrição do Produto"
            message="cadastrar"
            msgSucess="cadastrado"
          />
        </div>
      </div>
    </>
  );
}
