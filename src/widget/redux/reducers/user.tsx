import { FETCH_USER } from "../actions/user";

export interface UserState {
    count: number;
}

interface Action<T> {
    type: string;
    payload?: T;
}

const initialState: UserState = {
    count: 0
};

const userReducer = (state = initialState, action: Action<any>): UserState => {

    switch (action.type) {

        case FETCH_USER._REQUEST: {
            const counterToUpdate = state.count;
            return { 
                ...state, 
                count: counterToUpdate + 1
            };
        }

        default:
            return state;
    }

};
export { userReducer }