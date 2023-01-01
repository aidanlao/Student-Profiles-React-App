export default (studentState = [], action) => {
    switch (action.type) {
        case 'UPDATE': 
            return studentState.map((student) => {
                if (student._id === action.payload._id) {
                    return action.payload;
                } else {
                    return student;
                }
            });
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...studentState, action.payload];
        case 'DELETE':
            console.log(`removing from state the post with id  ${action.payload}`);
            return studentState.filter((student) => student._id !== action.payload);
            
        default: 
            return studentState; 

    }
}