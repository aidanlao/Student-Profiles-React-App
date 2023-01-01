import { useState, useEffect} from 'react';
import { useSelector }from 'react-redux';
import { fetchStudents } from '../../api/index';
import Student from './Student/Student';
export default () => {
    const students = useSelector((state) => state.students);
    return (
       !students.length ? <p>No posts to show</p> : (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
         {
            students.map((student) => <Student student={student} key={student._id}  />)
        }
        </div>
       
       )

    )
}