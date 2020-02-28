import React, { useReducer, useState } from 'react';
import { CoursesReducer } from './CoursesReducer';
import CoursesList from './CoursesList';
import { url } from '../../configs';
import { useEffect } from 'react';

const CoursesDashboard = () => {
    const [courses, dispatch] = useReducer(CoursesReducer, [

    ]);

    const [tenLop, setTenLop] = useState();
    const [viTri, setViTri] = useState();

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

    const addCourses = async (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            viTri: viTri,
            tenLop: tenLop
        }
        console.log(viTri+tenLop);
        
        const res = await fetch(`${url}/qllh/create`, config);
        const json = await res.json();
        const msg = json.msg;
        console.log(msg);
        dispatch({ type: 'ADD_COURSES', course: {
            tenLop, viTri
        } });
        setTenLop('');
        setViTri('');
    }


    return (
        <>
            <div>Courses Dashboard</div>
            <CoursesList courses={courses} />
            <form onSubmit={addCourses}>
                <input type="text" placeholder="Tên lớp" value={tenLop}
                onChange={(e) => setTenLop(e.target.value)} required/>
                <input type="text" placeholder="Vị trí" value={viTri}
                onChange={(e) => setViTri(e.target.value)} required/>
                <input type="submit" value="addCourse"/>
            </form>
        </>
    );
}

export default CoursesDashboard;