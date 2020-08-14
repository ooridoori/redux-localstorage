import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducer";



//combine all of our reducers into one
const rootReducer = combineReducers({
    activities: activitiesReducer
})



export default rootReducer;