import React from "react";

function ListCard({ collapseId, p }) {
  return (
    <li key={p.id} className="list-group-item">
      <p className="d-inline-flex gap-1">
        <a data-bs-toggle="collapse" href={`#${collapseId}`} value="button">
          {p.nome} {p.cognome}
        </a>
      </p>
      <div className="collapse" id={collapseId}>
        <div className="card card-body">
          <ul>
            <li>Codice fiscale: {p.codiceFiscale}</li>
            <li>Email: {p.email}</li>
            <li>Cellulare: {p.cellulare}</li>
          </ul>
        </div>
      </div>
    </li>
  );
}

export default ListCard;
