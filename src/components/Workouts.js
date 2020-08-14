import React, { useState } from 'react'
import Activity from "./Activity";
import { useSelector } from "react-redux";
import AddActivity from "./AddActivity";

const Workouts = () => {
    //get state from redux
    const allActivities = useSelector(state => state.activities);

    const [add, setAdd] = useState(false);


    console.log('state', allActivities)
    return (
        <div className={"workouts-wrapper"}>
            <h2>My Workouts</h2>
            <button onClick={(e) => setAdd(!add)}>Add Activity</button>
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
