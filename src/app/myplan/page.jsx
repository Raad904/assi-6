'use client'
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

const PlanPage = () => {
    const {added,saved} = useContext(WorkoutContext)
    console.log(added,saved);
    
    return (
        <div>
            plan
        </div>
    );
};

export default PlanPage;