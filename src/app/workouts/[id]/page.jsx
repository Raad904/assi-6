import AddButton from '@/app/component/AddButton';
import SaveButton from '@/app/component/SaveButton';
import React from 'react';

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
    cache: 'no-store',
  });

  const gymdata = await res.json();

  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
    difficulty,
    sets,
    reps,
    instructions,
    description,
  } = gymdata;

  return (
    <div className="min-h-screen bg-[#0d0f13] text-white">
      <div className="container-width mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">

          {/* Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={image}
              alt={name}
              className="h-full min-h-[500px] w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">

            {/* Heading */}
            <div>
              <h1 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
                {name}
              </h1>

              {description && (
                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                  {description}
                </p>
              )}

              {/* Muscle groups */}
              {muscleGroups?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-[#baff00] px-4 py-1 text-xs font-bold text-black"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#272b34] bg-[#151820]">
              <InfoRow label="EQUIPMENT" value={equipment} />
              <InfoRow label="DIFFICULTY" value={difficulty || 'Intermediate'} />
              <InfoRow label="SETS" value={sets || 4} />
              <InfoRow label="REPS" value={reps || '6-8'} />
              <InfoRow label="DURATION" value={duration ? `${duration} min` : '-'} />
              <InfoRow
                label="CALORIES"
                value={caloriesBurned ? `${caloriesBurned} kcal` : '-'}
              />
              <InfoRow label="RATING" value={rating || '-'} last />
            </div>

            {/* Instructions */}
            <div className="mt-7">
              <h2 className="text-sm font-bold tracking-wide">INSTRUCTIONS</h2>

              {instructions?.length > 0 ? (
                <ol className="mt-4 space-y-4">
                  {instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-4 text-sm leading-5 text-gray-400"
                    >
                      <span className="text-gray-500">{index + 1}.</span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <ol className="mt-4 space-y-4 text-sm leading-5 text-gray-400">
                  <li className="flex gap-4">
                    <span className="text-gray-500">1.</span>
                    <span>Lie on the bench with eyes under the bar and feet planted.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-gray-500">2.</span>
                    <span>Unrack with locked elbows and lower the bar to mid-chest.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-gray-500">3.</span>
                    <span>Press up in a slight arc until elbows lock without bouncing.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-gray-500">4.</span>
                    <span>Keep shoulder blades pinched and a natural arch in the back.</span>
                  </li>
                </ol>
              )}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <AddButton gymdata={gymdata}></AddButton>

                <SaveButton gymdata={gymdata}></SaveButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, last = false }) => (
  <div
    className={`flex items-center justify-between px-5 py-4 ${
      !last ? 'border-b border-[#272b34]' : ''
    }`}
  >
    <span className="text-[11px] font-bold tracking-wider text-gray-400">
      {label}
    </span>

    <span className="text-sm text-gray-200">
      {Array.isArray(value) ? value.join(', ') : value}
    </span>
  </div>
);

export default DetailsPage;
