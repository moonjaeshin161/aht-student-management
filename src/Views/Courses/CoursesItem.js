import React from 'react'

const CoursesItem = ({ course }) => {
    console.log({ course });
    return (
        <div>{course.tenLop}-{course.viTri}</div>
    );
}

export default CoursesItem;