import React, { useReducer, useState } from 'react';
import { CoursesReducer } from './CoursesReducer';
import CoursesList from './CoursesList';
import { url } from '../../configs';
import { useEffect } from 'react';

const CoursesDashboard = () => {
    const [courses, dispatch] = useReducer(CoursesReducer, [

    ]);

    const [inputs, setInputs] = useState();

    const getCourses = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("start", "0");
        urlencoded.append("length", "20");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        const res = await fetch(`${url}/qllh`, requestOptions);
        const json = await res.json();
        const data = json.data;
        console.log({ data });
        dispatch({ type: 'GET_COURSES', payload: data });
    }

    useEffect(() => {
        getCourses();
    }, []);

    const handleChange = (e) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    const addCourses = async (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("tenLop", inputs.tenLop);
        urlencoded.append("viTri", inputs.viTri);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
        const config = {
            method: "POST",
            body: JSON.stringify(inputs)
        }
        // console.log(viTri+tenLop);

        const res = await fetch(`${url}/qllh/create`, requestOptions);
        const json = await res.json();
        const msg = json.msg;
        console.log(msg);
        dispatch({ type: 'ADD_COURSES', payload: inputs });
    }


    return (
        <>
            <div>Courses Dashboard</div>
            <CoursesList courses={courses} />
            <form onSubmit={addCourses}>
                <input type="text" placeholder="Tên lớp" name="tenLop"
                    onChange={handleChange} required />
                <input type="text" placeholder="Vị trí" name="viTri"
                    onChange={handleChange} required />
                <input type="submit" value="addCourse" />
            </form>
        </>
    );
}

export default CoursesDashboard;