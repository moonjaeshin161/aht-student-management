import React from 'react'
import CoursesItem from './CoursesItem';

const CoursesList = ({ courses }) => {
    const _courses = courses.state;
    console.log({ _courses });


    return (
        <>
            <div>Courses List</div>
            <div>
                {
                    _courses?.map((course, index) => {
                        return (
                            <CoursesItem course={course} key={index} />
                        )
                    })
                }
            </div>
        </>
    );
}

export default CoursesList;