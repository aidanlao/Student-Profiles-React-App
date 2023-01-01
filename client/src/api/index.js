import axios from 'axios';
const url = 'http://localhost:5000/members'

export const fetchStudents = () => axios.get(url);
export const createStudent = (student) => axios.post(url, student);
export const deleteStudent = (id) => axios.delete(`${url}/${id}`);
export const editStudent = (student) => axios.patch(`${url}/${student._id}`, student);