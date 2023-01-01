import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: String,
    grade: {
        type: Number,
        default: 9
    },
    cluster: String,
    joinDate: String,
    points: {
        type: Number,
        default: 0,
    }
});

//making a student model
const Student = mongoose.model('student', studentSchema);

export default Student; 