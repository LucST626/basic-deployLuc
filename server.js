const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hey muy buenas a todos los que estén escuchando este mensaje desde el servidor  🚀');

  res.send('Hey muy buenas a todos los que estén escuchando este mensaje desde el servidor v2.0 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
