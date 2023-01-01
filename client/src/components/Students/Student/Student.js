
import { useDispatch } from "react-redux";
import './Student.css';
export default ({student, className}) => {
    const dispatch = useDispatch();
    const {name, grade, cluster, joinDate, _id, points } = student;
    return (
        <div className={`card`} > 
            <h1>{name}</h1>
            <hr />
            <p>Grade: {grade}</p>
            <p>Cluster: {cluster}</p>
            <p>Joined in: {joinDate}</p>
            <p>points: {points}</p>
        </div>
    )
}