const express = require('express');

const app = express();
const PORT = 3333;
app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
