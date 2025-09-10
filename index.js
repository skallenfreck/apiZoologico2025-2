/* Se carga el módulo de HTTP
var http = require("http");

// Se crea el servidor HTTP y se define la escucha en el puerto 8000
http.createServer(function (request, response) {
  // Se define la cabecera HTTP: 200 (OK) y el tipo de contenido como texto plano
  response.writeHead(200, { "Content-Type": "text/plain" });
  // Se responde con el mensaje "Hola Mundo!"
  response.end("Hola Mundo!\n");
}).listen(8000); // El servidor escuchará en el puerto 8000

console.log("Servidor iniciado en http://127.0.0.1:8000/"); */

//Se crea una constante para llamar al paquete express (el require es el import de Java)
const express = require('express')
//Se crea un constructor de express
const app = express()
//Se crea un puerto para que la app sea lanzada
const port = 3000

app.get('/', (req, res) => {
  res.send('Hoy juega millitos')
}
);

app.listen(port, () => {
  console.log('La aplicación se esta ejecutando por el puerto '+ port)
});
