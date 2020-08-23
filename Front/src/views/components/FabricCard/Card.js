import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../../variables/url_api";

import "./styles.css";

export default function CardFabric(props) {
  const { selectFabric, handleFabricChange2 } = props;
  const [carros, setCarros] = useState([]);
  const [carFilter, setCarFilter] = useState();
  const [modelo, setModelo] = useState();

  useEffect(() => {
    fetch(`${api}/api/Carroes`)
      .then((res) => res.json())
      .then((res) => setCarros(res))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (carros.length > 0) {
      var car = carros.filter((car) => {
        return car.fabricaId === selectFabric.fabricaId;
      });

      setCarFilter(car);
    }
    // console.log(car);
  }, [carros]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    var car = {
      FabricaId: selectFabric.fabricaId,
      Modelo: modelo,
    };

    await axios
      .post(`${api}/api/Carroes`, car)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="card">
      <div className="card-header">
        <span>{selectFabric.nome}</span>
      </div>
      <div className="card-body">
        <div className="card-text">
          {carFilter !== undefined && (
            <ul class="list-group">
              {carFilter.map((car) => {
                return (
                  <li class="list-group-item">
                    Modelo: {car.modelo}
                    <br /> ID: {car.carroId}
                  </li>
                );
              })}
            </ul>
          )}
          <div className="add-new-car">
            <form onSubmit={onFormSubmit}>
              <p>Para adicionar outro Carro preeencha o campo</p>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Modelo
                  </span>
                </div>
                <input
                  onChange={(e) => setModelo(e.target.value)}
                  value={modelo}
                  type="text"
                  class="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <button type="submit">Adicionar</button>
            </form>
          </div>
        </div>
        <button className="go-back" onClick={handleFabricChange2}>
          Voltar
        </button>
      </div>
    </div>
  );
}
