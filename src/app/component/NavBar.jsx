'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {

    const pathname = usePathname();

    const isWorkout = pathname === '/workouts';
    const isMyPlan = pathname === '/myplan';

    return (
        <div className="sticky top-0 z-50 bg-[#0c1214] border-b border-[#273034]">

            <div className="navbar container-width mx-auto px-4 md:px-6">

                {/* LEFT - LOGO */}
                <div className="navbar-start">

                    <div href="/" className="flex items-center gap-2">

                        <Image
                            src="/images/logo.png"
                            alt="FITLOG Logo"
                            width={30}
                            height={30}
                        />

                        <span className="text-white text-xl font-bold">
                            FITLOG
                        </span>

                    </div>

                </div>


                {/* CENTER - NAV LINKS */}
                <div className="navbar-center hidden md:flex">

                    <ul className="flex items-center gap-1">

                        {/* WORKOUTS */}
                        <li>
                            <Link
                                href="/workouts"
                                className={`px-4 py-2 rounded-lg font-semibold transition ${
                                    isWorkout
                                        ? 'bg-[#151c1f] text-[#DFFF00]'
                                        : 'text-white hover:text-[#DFFF00]'
                                }`}
                            >
                                Workouts
                            </Link>
                        </li>


                        {/* MY PLAN */}
                        <li>
                            <Link
                                href="/myplan"
                                className={`px-4 py-2 rounded-lg font-semibold transition ${
                                    isMyPlan
                                        ? 'bg-[#151c1f] text-[#DFFF00]'
                                        : 'text-white hover:text-[#DFFF00]'
                                }`}
                            >
                                My Plan
                            </Link>
                        </li>

                    </ul>

                </div>


                {/* RIGHT - PLAN & SAVED */}
                <div className="navbar-end">

                    <ul className="flex items-center gap-6 text-white">

                        <li className="flex items-center gap-2 font-semibold">
                            <span>Plan</span>

                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#DFFF00] text-black text-sm font-bold">
                                0
                            </span>
                        </li>

                        <li className="flex items-center gap-2 font-semibold">
                            <span>Saved</span>

                            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-400 text-white text-sm font-bold">
                                0
                            </span>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    );
};

export default NavBar;