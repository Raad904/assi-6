'use client'

import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

const SaveButton = ({ gymdata }) => {

    const { saved,setsaved } = useContext(WorkoutContext);

    const handelSaveButt = () => {
        console.log('trigger on', gymdata);
        setsaved([...saved, gymdata]);
    };

    return (
         <button
    className="flex items-center gap-2 rounded-lg border border-[#3a3f49] px-5 py-3 text-sm font-medium text-gray-300 transition-all duration-150 hover:bg-[#181b22] hover:scale-105 active:scale-95 active:shadow-inner"
    onClick={()=>handelSaveButt()}
>
    <span className="transition-transform duration-200 hover:scale-110">
        ♡
    </span>
    Save for later
</button>
    );
};

export default SaveButton;