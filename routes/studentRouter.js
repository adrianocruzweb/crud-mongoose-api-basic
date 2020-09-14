import express from 'express';
import { studentModel } from '../models/studentModel.js';

const app = express();
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
    console.log(`SEARCH`);
  } catch (err) {
    console.error(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.send(student);
    console.log('CREATE');
  } catch (err) {
    res.status(500).send(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const student = await studentModel.findOneAndUpdate(id, req.body, {
      new: true,
    });
    res.send(student);
    console.log('UPDATE');
  } catch (err) {
    console.log(err);
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const student = await studentModel.findByIdAndDelete(id, {
      rawResult: true,
    });
    res.send(student);
    console.log('DELETE');
  } catch (err) {
    console.log(err);
    res.status(500).send(error);
  }
});

export default router;
