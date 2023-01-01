import { combineReducers } from 'redux';
import editReducer  from './edit.js';
import  studentsReducer  from './students.js';

const appReducer = combineReducers({
    students: studentsReducer,
    studentToEdit: editReducer,
})

export default appReducer; 