<<<<<<< HEAD
export * from './defaultController';
=======
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
   res.send(`Node and express running on port ${PORT}`);
});

app.listen(PORT, () => {
   console.log(`your server is running on port ${PORT}`);
});

export * from './welcomeController';
export * from './splashController';
>>>>>>> parent of a6c2432... fixed to work on Azure
