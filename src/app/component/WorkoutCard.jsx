import React from 'react';
import Image from 'next/image';
import { FiClock, FiStar } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import Link from 'next/link';

const WorkoutCard = ({ gym }) => {

    const {
        id,
        name,
        image,
        muscleGroups,
        equipment,
        duration,
        caloriesBurned,
        rating
    } = gym;

    return (
        <Link href={`/workouts/${id}`}>

            <div className="bg-[#15171c] border border-[#292d35] rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]">

             
                <div className="relative w-full h-[220px]">

                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />

                </div>


                
                <div className="p-6">

                    
                    <div className="flex flex-wrap gap-2 mb-4">

                        {muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="bg-[#DFFF00] text-black px-3 py-1 rounded-full text-xs font-bold uppercase"
                            >
                                {muscle}
                            </span>
                        ))}

                    </div>


                    
                    <h2 className="text-white text-xl font-black uppercase">
                        {name}
                    </h2>


                    
                    <p className="text-gray-400 text-sm mt-1">
                        {equipment}
                    </p>


              
                    <div className="border-t border-[#292d35] my-5"></div>


                   
                    <div className="flex items-center gap-5 text-gray-400 text-sm">

                        
                        <div className="flex items-center gap-2">
                            <FiClock />
                            <span>{duration} min</span>
                        </div>


                    
                        <div className="flex items-center gap-2">
                            <FaFire />
                            <span>{caloriesBurned} kcal</span>
                        </div>


                        
                        <div className="flex items-center gap-2">
                            <FiStar />
                            <span>{rating}</span>
                        </div>

                    </div>

                </div>

            </div>

        </Link>
    );
};

export default WorkoutCard;