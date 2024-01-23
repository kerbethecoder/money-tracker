import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import { TransactionModel } from './models/Transaction.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json('test is very very successful!');
});

app.post('/api/transaction', async (req, res) => {
  // eslint-disable-next-line no-undef
  await mongoose.connect(process.env.MONGODB_URL);

  const { name, description, datetime, price } = req.body;
  const transaction = await TransactionModel.create({
    name,
    description,
    datetime,
    price,
  });

  res.json(transaction);
});

app.get('/api/transactions', async (req, res) => {
  // eslint-disable-next-line no-undef
  await mongoose.connect(process.env.MONGODB_URL);

  const transactions = await TransactionModel.find();
  res.json(transactions);
});

app.listen(port, () => {
  console.log(`---Server is running on http://localhost:${port}---`);
});
