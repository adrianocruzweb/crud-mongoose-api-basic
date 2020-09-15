import express from 'express';

import mongoose from 'mongoose';

import studentRouter from './routes/studentRouter.js';

import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@assinaturaeletronica.coda1.mongodb.net/grades?retryWrites=true&w=majority`,
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

app.listen(process.env.PORT, () => console.log('API iniciada'));
