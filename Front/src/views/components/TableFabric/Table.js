import React from "react";

import InfoIcon from "../../../assets/image/informacao.svg";

import "./styles.css";

export default function TableFabric(props) {
  const { fabrics, handleFabricChange } = props;

  return (
    <>
      <div className="table-fabric">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Ver Carros</th>
            </tr>
          </thead>
          <tbody>
            {fabrics !== undefined &&
              fabrics.map((fab) => {
                return (
                  <tr className="info-table">
                    <th scope="row">{fab.fabricaId}</th>
                    <td>{fab.nome}</td>
                    <td>
                      <button
                        className="info-button"
                        onClick={() => handleFabricChange(fab)}
                      >
                        <img src={InfoIcon} alt="info" />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
