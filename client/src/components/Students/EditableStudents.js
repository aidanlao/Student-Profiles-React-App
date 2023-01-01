import { useState, useEffect} from 'react';
import { useSelector }from 'react-redux';
import { fetchStudents } from '../../api/index';
import EditableStudent from './Student/EditableStudent';
export default () => {
    const students = useSelector((state) => state.students);
    const studentToEdit = useSelector((state => state.studentToEdit));
    return (
       !students.length ? <p>No posts to show</p> : (
        <div>
         {
            students.map((student) => {
                
                if( studentToEdit && student._id === studentToEdit._id) { 
                    return <EditableStudent student={student} key={student._id} className="active" />
                   } else {
                   return  <EditableStudent student={student} key={student._id}  />
                   }
            })
        }
        </div>
       
       )

    )
}