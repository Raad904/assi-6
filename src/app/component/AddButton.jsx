'use client'

import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

const AddButton = ({ gymdata }) => {

    const { added, setadded } = useContext(WorkoutContext);

    const handelAddButt = () => {
        console.log('trigger on', gymdata);
        setadded([...added, gymdata]);
    };

    return (
        <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[#baff00] px-5 py-3 text-sm font-bold text-black transition-all duration-150 hover:bg-[#a9e600] hover:scale-105 active:scale-95 active:shadow-inner"
            onClick={handelAddButt}
        >
            <span>▣</span>
            Add to today's plan
        </button>
    );
};

export default AddButton;