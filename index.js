const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Actividad 2.3 - Ephemeral Environment</title>
    </head>
    <body>
      <h1>Ambiente efímero</h1>
      <p>Esta aplicación fue desarrollada con Node.js y Express.</p>
      <p>Actividad 2.3 - Ephemeral Environments</p>
      <p>UDG Virtual</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
