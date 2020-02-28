export const CoursesReducer = (state, action) => {
    switch (action.type) {
        case 'GET_COURSES':
            return state.concat(action.payload);
        case 'ADD_COURSES':
            return [...state, {
                tenLop: action.course.tenLop,
                viTri: action.course.viTri
            }];
        default:
            throw new Error();
    }
}
