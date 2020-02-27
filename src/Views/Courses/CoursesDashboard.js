import React, { useReducer } from 'react';
import { CoursesReducer } from './CoursesReducer';
import CoursesList from './CoursesList';
import { url } from '../../configs';
import { useEffect } from 'react';

const CoursesDashboard = () => {
    const [courses, dispatch] = useReducer(CoursesReducer, [

    ]);

    const getCourses = async () => {
        const config = {
            method: "POST",
            length: 10,
            start: 0,
        }

        const res = await fetch(`${url}/qllh`, config);
        const json = await res.json();
        const data = json.data;
        console.log({ data });
        dispatch({ type: 'GET_COURSES', payload: data });

    }

    useEffect(() => {
        getCourses();
    }, []);



    return (
        <>
            <div>Courses Dashboard</div>
            <CoursesList courses={courses} />
        </>
    );
}

export default CoursesDashboard;