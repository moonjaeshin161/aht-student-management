export const CoursesReducer = (state, action) => {
    switch (action.type) {
        case 'GET_COURSES':
            return { ...state, state: action.payload };
        default:
            throw new Error();
    }
}
