'use client'
import React, { createContext, useState } from 'react';

export const WorkoutContext= createContext({})

const WorkoutProvider = ({children}) => {
const [added,setadded] = useState([]);
const [saved,setsaved] = useState([]);

const sharData = {
    added,setadded,saved,setsaved
}


    return <WorkoutContext.Provider value={sharData}>{children}</WorkoutContext.Provider>
};

export default WorkoutProvider;