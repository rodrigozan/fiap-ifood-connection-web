import React, { useState } from "react";

// components

import CardProductSingle from "components/Cards/CardProductSingle.js";

export default function ProductDetails() {
  return (
    <>
      <div className="flex flex-wrap mt-2">
        <div className="w-full mb-12 px-4">
          <CardProductSingle
            title="Editar Produto"
            action="Atualizar"
            name="Nome do Produto"
            price="0.00"
            description="Descrição do Produto"
            message="editar"
            msgSucess="atualizado"
          />
        </div>
      </div>
    </>
  );
}
