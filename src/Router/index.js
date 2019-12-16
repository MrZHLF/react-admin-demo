import Home from '../Pages/Home/Home'
import User from '../Pages/User/User'
import Mine from '../Pages/Mine/Mine'
import Rotation from '../Pages/Rotation/Rotation'

import CourseAdd from '../Pages/Course/CourseAdd'
import CourseCategory from '../Pages/Course/CourseCategory'
import CourseList from '../Pages/Course/CourseList'
import CourseTopic from '../Pages/Course/CourseTopic'


// 路由

let routes = [
    {path: '/', component: Home, exact: true},
    {path: '/user', component: User},
    {path: '/mine', component: Mine},
    {path:'/rotation',component: Rotation},
    {path: '/courseadd', component: CourseAdd},
    {path: '/coursecategory', component: CourseCategory},
    {path: '/courselist', component: CourseList},
    {path: '/coursetopic', component: CourseTopic},
]


export default routes;