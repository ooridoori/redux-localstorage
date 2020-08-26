import { v4 as uuidv4 } from 'uuid';
import storeJS from "store-js";

const initialState = [
    {
        id: 1,
        name: "gym",
        duration: "2 hours"
    }
];

//manipulating state immutabily by creating copy of the initial state

const activitiesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    console.log('payload', payload)

    switch(type) {
        case "CREATE_ACTIVITY":
            return [...state, {
                id: uuidv4(),
                name: payload.name,
                duration: payload.duration
            }]
        case "DELETE_ACTIVITY":
            const copyState = [...state];
            const i = copyState.findIndex(x => x.id === payload.id);
            copyState.splice(i, 1);
            return [...copyState]
        case"CLEAR_ACTIVITIES":
            storeJS.clearAll()
            //localStorage.clear()
            return initialState;
        default:
            return state;
    }
    return state;
};

export default activitiesReducer;