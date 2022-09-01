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
// url de base : Afficher welcome

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome");
  }
  if (request.url === "/api/players") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(database.players));
  }
  if (request.url === "/api/managers") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(database.managers));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Status code
// 200 : Success
// 300 : Redirection
// 400 : Erreur client
// 500 : Erreur server
