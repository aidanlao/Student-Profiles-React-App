import * as api from '../api';


export const getStudents = () => async (dispatch) => {
    try {
        const {data} = await api.fetchStudents(); 
        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        
    }
}

export const createStudent = (student) => async (dispatch) => {
    try {
        
        const {data} = await api.createStudent(student);
        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        
    }
}

export const deleteStudent = (id) => async (dispatch) => {
    try {
        await api.deleteStudent(id);
        dispatch({type: "DELETE", payload: id});
    } catch (error) {
        
    }
}

export const editStudent = (student) => async (dispatch) => {

    try {
        const {data} = await api.editStudent(student);
        dispatch({type: "UPDATE", payload: data });
    } catch (error) {
        
    }
}
