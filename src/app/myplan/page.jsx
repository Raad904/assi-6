'use client';

import React, { useContext, useState } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import PlanSaveCard from '../component/PlanSaveCard';
import Link from 'next/link';

const PlanPage = () => {

    const { added, saved } = useContext(WorkoutContext);

    const exercises = Array.isArray(added) ? added : [];
    const savedExercises = Array.isArray(saved) ? saved : [];

    const [activeTab, setActiveTab] = useState('today');

    // Active tab অনুযায়ী items
    const currentItems =
        activeTab === 'today' ? exercises : savedExercises;


    // Active tab অনুযায়ী counter
    const totalExercises = currentItems.length;

    const totalMinutes = currentItems.reduce(
        (total, workout) => total + Number(workout.duration || 0),
        0
    );

    const totalCalories = currentItems.reduce(
        (total, workout) => total + Number(workout.caloriesBurned || 0),
        0
    );


    return (
        <div className="container-width">

            {/* Header */}
            <div className="mt-10 mb-8">

                <h1 className="text-white text-3xl md:text-4xl font-black uppercase leading-none">
                    MY PLAN
                </h1>

                <p className="text-gray-400 text-sm md:text-base mt-2">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

            </div>


            {/* Counter */}
            <div className="w-full rounded-2xl border border-[#252932] bg-[#12151b]">

                <div className="grid grid-cols-3">

                    {/* Exercises */}
                    <div className="px-6 py-6 border-r border-[#252932]">

                        <p className="text-gray-500 text-sm mb-2">
                            Exercises
                        </p>

                        <p className="text-[#b6ff00] text-3xl font-bold">
                            {totalExercises}
                        </p>

                    </div>


                    {/* Minutes */}
                    <div className="px-6 py-6 border-r border-[#252932]">

                        <p className="text-gray-500 text-sm mb-2">
                            Minutes
                        </p>

                        <p className="text-white text-3xl font-bold">
                            {totalMinutes}
                        </p>

                    </div>


                    {/* Calories */}
                    <div className="px-6 py-6">

                        <p className="text-gray-500 text-sm mb-2">
                            Calories
                        </p>

                        <p className="text-white text-3xl font-bold">
                            {totalCalories}
                        </p>

                    </div>

                </div>

            </div>


            {/* Tabs */}
            <div className="mt-8">

                <div className="flex items-center w-fit rounded-xl border border-[#252932] bg-[#151920] p-1">

                    {/* Today's Plan */}
                    <button
                        onClick={() => setActiveTab('today')}
                        className={
                            activeTab === 'today'
                                ? 'px-6 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer bg-[#202630] text-white shadow-sm'
                                : 'px-6 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer text-gray-500 hover:text-gray-300'
                        }
                    >
                        Today's Plan
                    </button>


                    {/* Saved */}
                    <button
                        onClick={() => setActiveTab('saved')}
                        className={
                            activeTab === 'saved'
                                ? 'px-6 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer bg-[#202630] text-white shadow-sm'
                                : 'px-6 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer text-gray-500 hover:text-gray-300'
                        }
                    >
                        Saved
                    </button>

                </div>


                {/* Content */}
                <div className="mt-6">

                    {currentItems.length > 0 ? (

                        <div className="space-y-4">

                            {currentItems.map((item) => (
                                <PlanSaveCard
                                    key={item.id}
                                    item={item}
                                />
                            ))}

                        </div>

                    ) : (

                        <div className="w-full min-h-[300px] rounded-2xl border border-dashed border-[#252932] bg-[#101217] flex flex-col items-center justify-center text-center">

                            <h2 className="text-white text-xl md:text-2xl font-black uppercase">
                                NOTHING HERE YET
                            </h2>

                            <p className="text-gray-500 text-sm mt-2">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/workouts"
                                className="mt-6 px-6 py-3 rounded-full bg-[#b6ff00] text-black text-sm font-bold hover:bg-[#c4ff33] hover:scale-105 active:scale-90 transition-all duration-150 cursor-pointer inline-block shadow-[0_8px_25px_rgba(182,255,0,0.15)]"
                            >
                                Go to workouts
                            </Link>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
};

export default PlanPage;