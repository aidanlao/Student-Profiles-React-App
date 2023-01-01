import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Students from '../components/Students/Students';
export default function StudentView() {
    const dispatch = useDispatch();

    


    return ( 
        <main style={{display: "flex", flexDirection: "column", 
        fontFamily: "sans-serif", color: "black", alignItems: 'center',
        }}>
            <h1 style={{ fontStyle: "italic", color: "darkblue"}}>STUDENTS</h1>
            <Students />
        </main>
    )
}