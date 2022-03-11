import React from "react";
import "./Card.css";
import {isPositivo, formataNumero} from "../utils";

const Card = () => {
  return(
    <>
      <div className="card">        
        <p className="ticker no-margins">ITSA4</p>
        <p className="label-quantidade no-margins label-precos">Quantidade</p>
        <p className="quantidade no-margins">351</p>
        <p className="label-pm no-margins label-precos">Preço Médio</p>
        <p className="pm no-margins precos">R${pMedio}</p>
        <p className="label-atual no-margins label-precos">Último Preço</p>
        <p className="atual no-margins precos">R${pAtual}</p>
        <p className="variacao no-margins" 
           style={{color: positivo ? "green" : "red"}}
        >
          {varTotal}%
        </p>
      </div>
    </>
  )
};

export default Card;

const pm = (8.64);
const atual = (11.68);

const calculaVariacao = (pm, atual) => {
  let variacao = (( atual * 100) / pm ) - 100
  return parseFloat(variacao).toFixed(2);
};

const variacao = () => {
  let nVariacao = calculaVariacao(pm, atual);
    return isPositivo(nVariacao) ? 
           ("+" + nVariacao) :
           nVariacao;    
};

const pMedio = formataNumero(pm);
const pAtual = formataNumero(atual);
const varTotal = formataNumero(variacao());
const positivo = isPositivo(calculaVariacao(pm, atual));