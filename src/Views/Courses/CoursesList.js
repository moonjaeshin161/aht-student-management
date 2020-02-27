import React from 'react'
import CoursesItem from './CoursesItem';

const CoursesList = ({ courses }) => {
    return (
        <>
            <div>Courses List</div>
            <div>
                {
                    courses?.map((course, index) => {
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