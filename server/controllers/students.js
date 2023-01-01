import mongoose from 'mongoose';
import Student from '../models/student.js';

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find(); //gets all the students
        console.log(students);
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createStudents = async (req, res) => {
    try {
        const student = req.body; 
        const newStudent = new Student(student);
       
        await newStudent.save();
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteStudent = async (req,res) => {
    try {
        const { id } = req.params; 
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post with that id");

        await Student.findByIdAndRemove(id);
        res.json("succesfully deleted");
        console.log('post with id ' + id + 'sucessfully deleted');
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const editStudent = async (req,res) => {
    try {
        const student = req.body;
        const id = req.body._id;
        console.log(req.body);
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post with that id");
        const updatedPost = await Student.findByIdAndUpdate(id, student, {new: true});
        res.json(updatedPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}