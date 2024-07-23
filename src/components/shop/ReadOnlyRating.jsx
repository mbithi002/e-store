import React from 'react';

const ReadOnlyRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
        <div className="flex items-center">
            {stars.map(star => (
                <svg
                    key={star}
                    className={`w-[1.15rem] h-6 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M12 2.25l2.493 5.054 5.577.815-4.042 3.95.952 5.548L12 14.12l-4.98 2.625.952-5.548-4.042-3.95 5.577-.815L12 2.25z" />
                </svg>
            ))}
        </div>
    );
};

export default ReadOnlyRating;
