import { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { createStudent, editStudent} from '../actions';
import Students from '../components/Students/EditableStudents';
export default function Admin() {
    const dispatch = useDispatch();
    const studentToEdit = useSelector((state) => state.studentToEdit);


    const [studentData, setStudentData] = useState({name: '',grade: 9, cluster: '', joinDate: ''});
     useEffect(() => {
         if (studentToEdit) {
            setStudentData(studentToEdit); console.log("run")}},[studentToEdit]);
    const clear = () => {
        setStudentData({name: '',grade: 9, cluster: '', joinDate: '', _id: studentData._id});
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (studentToEdit) {
            console.log("editing a student in admin.jsx");
            console.log(studentData);
            dispatch(editStudent(studentData));
            dispatch({type: "EDITMODE", payload: studentData})
            
        } else {
            const {_id, ...studentDataWithoutId } = studentData;
                
            if(studentData.grade == null || studentData.grade == '') { 
                    
                    dispatch(createStudent({...studentDataWithoutId, grade: 9}))
                }
            
             else {
                dispatch(createStudent(studentDataWithoutId))}

            setStudentData({name: '',grade: 9, cluster: '', joinDate: ''});
        }

    }



    return ( 
        <main>
            {studentToEdit ? <h2>editing {studentToEdit.name}</h2> : <h2>create a student</h2>}
            <form onSubmit={handleSubmit} > 
            <input type="text" name="studentName"  value={studentData.name}  onChange={(e) => setStudentData({...studentData, name: e.target.value})}></input>
            <input type="number" name="studentGrade"  value={studentData.grade }  onChange={(e) => setStudentData({...studentData, grade: e.target.value})}></input>
            <input type="text" name="studentCluster"  value={studentData.cluster }  onChange={(e) => setStudentData({...studentData, cluster: e.target.value})}></input>
            <input type="text" name="studentJoinDate"  value={studentData.joinDate }  onChange={(e) => setStudentData({...studentData, joinDate: e.target.value})}></input>
            <input type="submit" id="submitForm" value="Submit"></input>
            </form> 
             {studentToEdit ? (<button type="button" onClick={() => {  clear(); dispatch({type: "EXITEDIT"})}}>Exit Edit Mode</button> ) : <></>}
            <button type="button" onClick={() => { clear() }}>Clear</button>
            <h1>All the students</h1>
            <Students />
        </main> 
    )
}