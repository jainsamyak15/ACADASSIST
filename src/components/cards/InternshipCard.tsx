import React from 'react';

interface InternshipCardProps {
    title: string
    company: string
    location: string
    duration: string
    stipend: string
    description: string
    type: 'industrial' | 'research'
  }
  
  export default function InternshipCard({
    title,
    company,
    location,
    duration,
    stipend,
    description,
    type
  }: InternshipCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="space-y-2 text-gray-600">
            <p><span className="font-medium">Company:</span> {company}</p>
            <p><span className="font-medium">Location:</span> {location}</p>
            <p><span className="font-medium">Duration:</span> {duration}</p>
            <p><span className="font-medium">Stipend:</span> {stipend}</p>
            <p><span className="font-medium">Type:</span> {type}</p>
          </div>
          <p className="mt-4 text-gray-700">{description}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    )
  }