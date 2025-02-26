import mongoose from 'mongoose'

const courseProgressSchema = mongoose.Schema({
    userId: {type:String, required:true},
    courseId: {type:String, required:true},
    completed: {type: Boolean, default:false},
    lectureCompleted: []
}, {minimize: false})

const courseProgressModel = mongoose.models.courseProgress || mongoose.model('courseProgress', courseProgressSchema)

export default courseProgressModel