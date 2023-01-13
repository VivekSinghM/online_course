import { createContext, useState } from "react";

export const CourseContext = createContext();
const CourseProvide = (props) => {
    const [allCourse,setAllCourse] = useState();
    return(
        <CourseContext.Provider value={{allCourse,setAllCourse}}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseProvide