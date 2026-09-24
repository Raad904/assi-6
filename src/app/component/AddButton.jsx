'use client'

import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

const AddButton = ({ gymdata }) => {

    const { added, setadded } = useContext(WorkoutContext);

    const handelAddButt = () => {
        console.log('trigger on', gymdata);

        // Already added কিনা check
        const alreadyAdded = added.some(
            (item) => item.id === gymdata.id
        );

        if (alreadyAdded) {
            alert('This exercise is already added to your plan!');
            return;
        }

        setadded([...added, gymdata]);
          alert(`${gymdata.name} is added`);
    };

    return (
        <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[#baff00] px-5 py-3 text-sm font-bold text-black transition-all duration-150 hover:bg-[#a9e600] hover:scale-105 active:scale-95 active:shadow-inner"
            onClick={()=>handelAddButt()}
        >
            <span>▣</span>
            Add to today's plan
        </button>
    );
};

export default AddButton;