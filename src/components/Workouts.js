import React, { useState } from 'react'
import Activity from "./Activity";
import { useSelector } from "react-redux";
import AddActivity from "./AddActivity";
import {useDispatch} from "react-redux";

const Workouts = () => {
    //get state from redux
    const allActivities = useSelector(state => state.activities);
    const dispatch = useDispatch()

    const [add, setAdd] = useState(false);

    const clearAll = () => {
        console.log('clear all')
        dispatch({
            type: "CLEAR_ACTIVITIES",
        })
    }


    console.log('state', allActivities)
    return (
        <div className={"workouts-wrapper"}>
            <h2>My Workouts</h2>
            <button onClick={(e) => setAdd(!add)}>Add Activity</button>
            <button onClick={() => clearAll()}> Clear List </button>
            { add && <AddActivity/> }
            {
                allActivities.map(activity => {
                    console.log('activity', activity)
                    return<Activity key={activity.id} id={activity.id} name={activity.name} duration={activity.duration}/>
                })
            }
        
        </div>
    )
}

export default Workouts;
