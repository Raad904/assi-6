'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const PlanSaveCard = ({ item }) => {
    const [done, setDone] = useState(false);

    return (
        <div className="w-full mb-4">
            <div className="w-full min-h-[112px] rounded-2xl border border-[#252b35] bg-[#14171d] px-4 py-4 flex items-center gap-4">

                {/* Image */}
                <div className="w-[145px] h-[80px] shrink-0 overflow-hidden rounded-xl">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Information */}
                <div className="flex-1 min-w-0">

                    <h2 className="text-white text-base md:text-lg font-black uppercase truncate">
                        {item.name}
                    </h2>

                    <p className="text-gray-500 text-xs md:text-sm mt-0.5">
                        {item.category}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-2 text-gray-400 text-xs">

                        <span className="flex items-center gap-1">
                            <span className="text-[#b6ff00]">◷</span>
                            {item.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <span className="text-[#b6ff00]">♨</span>
                            {item.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <span className="text-[#b6ff00]">☆</span>
                            {item.rating}
                        </span>

                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0">

                    {/* View Details */}
                    <Link
                        href={`/workouts/${item.id}`}
                        className="
                            hidden md:block
                            px-5 py-2.5
                            rounded-full
                            border border-[#303846]
                            text-white text-xs
                            hover:bg-[#20252d]
                            hover:border-[#4a5260]
                            transition-all duration-200
                            cursor-pointer
                        "
                    >
                        View Details
                    </Link>

                    {/* Mark as Done */}
                    <button
                        onClick={() => setDone(true)}
                        disabled={done}
                        className={`
                            px-4 md:px-5 py-2.5
                            rounded-full
                            text-xs font-bold
                            transition-all duration-150
                            ${
                                done
                                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                    : 'bg-[#b6ff00] text-black hover:bg-[#c4ff33] hover:scale-105 active:scale-90 cursor-pointer'
                            }
                        `}
                    >
                        <span className="mr-1">✓</span>

                        <span className="hidden sm:inline">
                            {done ? 'Completed' : 'Mark as Done'}
                        </span>

                        <span className="sm:hidden">
                            {done ? 'Done ✓' : 'Done'}
                        </span>
                    </button>

                    {/* Delete */}
                    <button
                        className="
                            text-gray-500
                            text-xl
                            hover:text-white
                            hover:scale-110
                            active:scale-90
                            transition-all duration-150
                            cursor-pointer
                        "
                    >
                        ×
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlanSaveCard;