import express from 'express';

import mongoose from 'mongoose';

import studentRouter from './routes/studentRouter.js';

(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://userAdriano:adrianopadba@assinaturaeletronica.coda1.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.error('Erro ao Conectar no MongoDB Atlas: ' + error);
  }
})();

const app = express();

app.use(express.json());
app.use('/student', studentRouter);

app.listen(3000, () => console.log('API iniciada'));
