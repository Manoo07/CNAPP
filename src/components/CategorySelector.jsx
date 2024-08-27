import React from 'react';

const CategorySelector = ({ onSelectCategory }) => {
  const categories = [
    "Vulnerabilities",
    "Compliance",
    "Workloads",
    "Network Security",
    "Identity And Access Management"
  ];

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Select a Category:</h3>
      <select
        onChange={(e) => onSelectCategory(e.target.value)}
        className="w-full p-2 border rounded-lg"
      >
        <option value="">--Select--</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
