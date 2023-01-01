           
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { editStudent, deleteStudent } from "../../../actions";
import './Student.css';
export default ({student, className}) => {
    const dispatch = useDispatch();
    const {name, grade, cluster, joinDate, _id, points} = student;
    const [pointState, setPointState] = useState(points);

    useEffect(() => { dispatch(editStudent({...student, points: pointState})) }, [pointState]);
    return (
        <div className={`${className}`}> 
            <h1>{name}</h1>
            <p>Grade: {grade}</p>
            <p>Cluster: {cluster}</p>
            <p>Joined in: {joinDate}</p>
            <form>
               <span style={{ display: "flex",}}>
               <p>points</p>
               <input type="number" value={pointState} onChange={(e) => { 
                if (e.target.value > 0) 
                { setPointState(e.target.value); }
                
            }}></input>
                </span>
            </form>
       
            <button onClick={() => { dispatch({type: "EXITEDIT"}); dispatch(deleteStudent(_id)) }}>Delete</button>
            <button onClick={() => { dispatch({type: "EDITMODE", payload: student});  }}>Edit</button>
        </div>
    )
}