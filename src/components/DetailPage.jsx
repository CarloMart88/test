import { useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import ListCard from "./ListCard";

const eventi = [
  {
    id: 1,
    location: "Milano",
    dataInizio: "2025-10-01",
    dataFine: "2025-10-03",
    operatore: "Luca Rossi",
    status: "pronto",
    partecipanti: [
      {
        id: 1,
        nome: "Mario",
        cognome: "Bianchi",
        codiceFiscale: "BNCMRA85T10H501Z",
        email: "mario.bianchi@email.com",
        cellulare: "3331234567",
      },
      {
        id: 2,
        nome: "Anna",
        cognome: "Verdi",
        codiceFiscale: "VRDANN90F41H501X",
        email: "anna.verdi@email.com",
        cellulare: "3337654321",
      },
    ],
  },
  {
    id: 2,
    location: "Roma",
    dataInizio: "2025-11-05",
    dataFine: "2025-11-07",
    operatore: "Giulia Neri",
    status: "finito",
    partecipanti: [
      {
        id: 1,
        nome: "Carlo",
        cognome: "Esposito",
        codiceFiscale: "SPSCRL92A01H501Y",
        email: "carlo.esposito@email.com",
        cellulare: "3312345678",
      },
      {
        id: 2,
        nome: "Laura",
        cognome: "Ferrari",
        codiceFiscale: "FRRLRA88B21H501W",
        email: "laura.ferrari@email.com",
        cellulare: "3318765432",
      },
      {
        id: 3,
        nome: "Paolo",
        cognome: "Ricci",
        codiceFiscale: "RCCPLL95C12H501V",
        email: "paolo.ricci@email.com",
        cellulare: "3319876543",
      },
    ],
  },
  {
    id: 3,
    location: "Firenze",
    dataInizio: "2025-12-10",
    dataFine: "2025-12-12",
    operatore: "Marco Conti",
    status: "non iniziato",
    partecipanti: [
      {
        id: 1,
        nome: "Elena",
        cognome: "Gallo",
        codiceFiscale: "GLLNLN89D34H501T",
        email: "elena.gallo@email.com",
        cellulare: "3391234567",
      },
    ],
  },
];

function DetailPage() {
  const { id } = useParams();
  const evento = eventi.find((e) => e.id === parseInt(id));
  const [search, setSearch] = useState("");

  // Filtro dei partecipanti basato sulla ricerca
  const partecipantiFiltrati = evento.partecipanti.filter((p) =>
    `${p.nome} ${p.cognome}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="mb-3">
              {evento.location} ({evento.dataInizio} - {evento.dataFine})
            </h2>
            <input
              type="text"
              placeholder="Cerca partecipante..."
              className="form-control mb-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <h3 className="mt-4">Partecipanti</h3>
            <ul className="list-group">
              {partecipantiFiltrati.length > 0 ? (
                partecipantiFiltrati.map((p) => {
                  const collapseId = `collapse-${evento.id}-${p.id}`;
                  return <ListCard collapseId={collapseId} p={p} />;
                })
              ) : (
                <li className="list-group-item">Nessun partecipante trovato</li>
              )}
            </ul>
            <div className="row my-5">
              <div className="col-12 my-5">
                <nav>
                  <ul className="list-unstyled">
                    <li className="ms-4">
                      <NavLink
                        to="/"
                        className="my-button open-sans-uniquifier text-decoration-none brown"
                      >
                        Home
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
