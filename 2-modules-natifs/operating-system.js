const os = require("os");

const coeursCPU = os.cpus();

// Pour chaque coeur, afficher le modèle et le user
/**
 *   user:14362250
 *   modèle : Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
 *
 *   user : 899460
 *   modèle : Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
 */

// Afficher la quantité de mémoire vive(RAM) disponible en Mégabytes
// Afficher le nom d'hôte du système d'exploitation
coeursCPU.forEach(function (coeur) {
  console.log(`User : ${coeur.times.user}\nModèle : ${coeur.model}\n\n`);
});

// Afficher la quantité de mémoire vive
console.log(`RAM :  ${os.totalmem()} bytes`);

// Afficher le nom de l'ordinateur(hostname)
console.log(`Nom ordinateur : ${os.hostname()}`);
