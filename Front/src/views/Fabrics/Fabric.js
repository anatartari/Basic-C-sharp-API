import React, { useState, useEffect } from "react";

import Table from "../components/TableFabric/Table";
import CardFabric from "../components/FabricCard/Card";
import axios from "axios";

import api from "../../variables/url_api";

import "./styles.css";

export default function Fabricas() {
  const [fabrics, setFabrics] = useState([]);
  const [selectFabric, setSelectFabric] = useState();
  const [nome, setNome] = useState("");

  const handleFabricChange = (e) => {
    setSelectFabric(e);
  };

  const handleFabricChange2 = () => {
    setSelectFabric(undefined);
  };

  useEffect(() => {
    async function getFabrics() {
      fetch(`${api}/api/Fabricas`)
        .then((res) => res.json())
        // .then((res) => console.log(res))
        .then((res) => setFabrics(res))
        .catch((error) => console.log(error));
    }

    getFabrics();
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    var fab = {
      nome: nome,
    };

    await axios
      .post(`${api}/api/Fabricas`, fab)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div id="Fabrics">
      <div id="bg">
        <div className="container">
          <div className="header">
            <h1 className="title">Fabricas Cadastradas</h1>
            <form onSubmit={onFormSubmit}>
              <div class="input-group mb-3">
                <input
                  onChange={(e) => setNome(e.target.value)}
                  value={nome}
                  type="text"
                  class="form-control"
                  placeholder="Digite um novo nome"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit">
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
          {selectFabric !== undefined ? (
            <CardFabric
              selectFabric={selectFabric}
              handleFabricChange2={handleFabricChange2}
            />
          ) : (
            <>
              {fabrics !== undefined && fabrics.length > 0 ? (
                <Table
                  fabrics={fabrics}
                  handleFabricChange={handleFabricChange}
                />
              ) : (
                <h5 className="no-fabrics">Nenhuma Fabrica registrada...</h5>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
