import React from 'react';
interface ScholarshipCardProps {
    title: string
    amount: string
    description: string
    icon: string
  }
  
  export default function ScholarshipCard({
    title,
    amount,
    description,
    icon
  }: ScholarshipCardProps) {
    return (
      <div className="relative group h-80 perspective">
        <div className="absolute inset-0 preserve-3d duration-500 group-hover:rotate-y-180">
          <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
            <i className={`${icon} text-4xl mb-4`}></i>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-2xl font-bold text-yellow-300 mb-4">{amount}</p>
          </div>
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-xl p-6 shadow-xl">
            <p className="text-gray-700">{description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    )
  }