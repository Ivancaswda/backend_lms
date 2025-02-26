import express from 'express'
import {clerkWebhooks} from "../controllers/webhooks.js";
import {addUserRating, getUserData, purchaseCourse, updateUserCourseProgress, userEnrolledCourses} from "../controllers/userController.js";
const userRouter = express.Router()

userRouter.post('/clerk', clerkWebhooks)
userRouter.get('/data', getUserData)
userRouter.get('/enrolled-courses', userEnrolledCourses)
userRouter.post('/purchase', purchaseCourse)
userRouter.post('/update-course-progress', updateUserCourseProgress)
userRouter.post('/add-rating', addUserRating)
export default userRouter