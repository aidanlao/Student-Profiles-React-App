import express from 'express';
import {getStudents, createStudents, deleteStudent,editStudent} from '../controllers/students.js';

const router = express.Router();

router.get('/',getStudents);
router.post('/', createStudents);
router.delete('/:id', deleteStudent);
router.patch('/:id',editStudent)
export default router; 