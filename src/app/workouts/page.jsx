import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WorkoutCard from '../component/WorkoutCard';

const gymPromis = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json()
}

const WorkoutsPage = async () => {
    const gyms = await gymPromis()
    

    return (<>
        <div className="container-width my-5">

            <div className="bg-[#15171c] border border-[#292d35] rounded-2xl min-h-[450px] px-8 md:px-14 py-10 flex items-center justify-between overflow-hidden">

                {/* LEFT CONTENT */}
                <div className="max-w-[600px]">

                    <p className="text-[#DFFF00] font-semibold text-sm tracking-wider mb-6">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-white text-5xl md:text-6xl font-black leading-[0.95] uppercase">
                        TRAIN WITH INTENT. LOG
                        <br />
                        EVERY SET.
                    </h1>

                    <p className="text-gray-400 text-base md:text-lg leading-6 mt-6 max-w-[550px]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    <Link
                        href="/workouts"
                        className="inline-block mt-7 bg-[#DFFF00] text-black font-bold text-sm px-6 py-3 rounded-md hover:bg-[#cfff00] transition"
                    >
                        BROWSE WORKOUTS
                    </Link>

                </div>


                {/* RIGHT IMAGE */}
                <div className="hidden md:block relative w-[350px] h-[380px]">

                    <Image
                        src="/images/banner.png"
                        alt="Workout"
                        fill
                        sizes="350px"
                        className="object-contain"
                        priority
                    />

                </div>

            </div>

            <div className="my-10">
                <h1 className="text-white text-3xl md:text-4xl font-black uppercase leading-none">
                    THE LIBRARY
                </h1>

                <p className="text-gray-400 text-sm md:text-base mt-2">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            
        </div>

        <div className='grid grid-cols-3 gap-4 container-width'>
            {
                gyms.map((gym)=><WorkoutCard key={gym.id} gym={gym}></WorkoutCard>)
            }
        </div>
        </>
    );
};

export default WorkoutsPage;