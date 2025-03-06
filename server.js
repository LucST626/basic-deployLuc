const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hey muy buenas a todos los que estén escuchando este mensaje desde el servidor  🚀 ohhhhhhhhhhhhh ma god');  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
