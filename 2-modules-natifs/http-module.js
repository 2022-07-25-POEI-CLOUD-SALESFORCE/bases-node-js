const http = require("http");

const database = {
  players: [
    { id: 1, name: "Zinedine Zidane" },
    { id: 2, name: "Thierry Henry" },
    { id: 3, name: "David Trezeguet" },
    { id: 4, name: "Robert Pires" },
    { id: 5, name: "Claude Makelele" },
  ],
  managers: [
    { id: 1, name: "Carlo Ancelotti" },
    { id: 2, name: "Pep Guardiola" },
    { id: 3, name: "Jupp Heynkes" },
  ],
};

// url : /api/players
// url : /api/managers

const server = http.createServer((request, response) => {
  if (request.url === "/api/players") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(database.players);
  }
  if (request.url === "/api/managers") {
  }
});

// Status code
// 200 : Success
// 300 : Redirection
// 400 : Erreur client
// 500 : Erreur server
