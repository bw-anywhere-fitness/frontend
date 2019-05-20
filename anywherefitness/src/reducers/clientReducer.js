import { };

const initialState = {
    classesList: [ {} ],
    clientInfo: {
        name: 'Amy',
    },
    classesRemaining: 0,
}

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: '',
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
            }
        case GET_PASSES_START:
            return state;
        case GET_PASSES_SUCCESS:
        return {
            ...state,
            classesRemaining: action.payload
        }
    }

}