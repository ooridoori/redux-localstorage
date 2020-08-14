import React, {useState} from 'react'
import { useDispatch } from "react-redux";

const AddActivity = () => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: "",
        duration: ""
    });
    const handleChange = (e) => {
        e.persist();
        setData(prev => ({ ...prev, [e.target.name]: e.target.value}))
    }

    console.log('data', data)

    const addActivity = () => {
        //put state data into activities reducer => store
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: {
                name: data.name,
                duration: data.duration
            }
        })
    }

    return (
        <div className={"add"}>
            <div className="input-section">
                <p>Activity:</p>
                <input onChange={handleChange} name={"name"} placeholder={"Activity Name"}></input>
            </div>
            <div className="input-section">
                <p>Duration:</p>
                <input onChange={handleChange} name={"duration"} placeholder={"Activity Duration"}></input>
            </div>
            <button onClick={addActivity}>Add Activity</button>
        </div>
    )
}

export default AddActivity
