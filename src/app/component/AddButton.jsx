'use client'

import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import { Bounce, toast } from 'react-toastify';

const AddButton = ({ gymdata }) => {

    const { added, setadded } = useContext(WorkoutContext);

    const handelAddButt = () => {
        console.log('trigger on', gymdata);

       
        const alreadyAdded = added.some(
            (item) => item.id === gymdata.id
        );

        if (alreadyAdded) {
            // alert('This exercise is already added to your plan!');
            toast.info(`${gymdata.name} is already added`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            return;
        }

        setadded([...added, gymdata]);
        //   alert(`${gymdata.name} is added`);
        toast.success(`${gymdata.name} is added`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-[#baff00] px-5 py-3 text-sm font-bold text-black transition-all duration-150 hover:bg-[#a9e600] hover:scale-105 active:scale-95 active:shadow-inner"
            onClick={() => handelAddButt()}
        >
            <span>▣</span>
            Add to today's plan
        </button>
    );
};

export default AddButton;