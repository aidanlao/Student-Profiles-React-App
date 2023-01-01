export default (editState = null, action) => {
    switch (action.type) {
        case 'EDITMODE': 
            console.log(action.payload);
            console.log("adding to the state above");
            return action.payload;
        case 'EXITEDIT':
            return null; 
        default: 
            return editState; 

    }
}