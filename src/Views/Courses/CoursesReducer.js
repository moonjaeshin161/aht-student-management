export const CoursesReducer = (state, action) => {
    switch (action.type) {
        case 'GET_COURSES':
            return state.concat(action.payload);
        case 'ADD_COURSES':
            return [...state, {
                tenLop: action.payload.tenLop,
                viTri: action.payload.viTri
            }];
        default:
            throw new Error();
    }
}
