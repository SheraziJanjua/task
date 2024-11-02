// src/components/DateSheet.js
import { useState } from 'react';

const DateSheet = () => {
  // Set the initial date
  const [selectedDate, setSelectedDate] = useState(new Date('2024-05-13'));

  // Function to format date as "13 May 2024"
  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // Function to handle previous day
  const handlePrevious = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  // Function to handle next day
  const handleNext = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  return (
    <>
      <nav className="text-sm text-gray-600">Dashboard &gt; Exams &gt; Date Sheet</nav>
      <h2 className="text-2xl py-4 font-bold">Datasheet</h2>

      <div className="p-6 bg-white ">
        <div className="flex bg-white  gap-4 items-center my-4">
          {/* Previous Button */}
         

          {/* Display Selected Date */}
          <h3 className="text-3xl font-semibold">{formatDate(selectedDate)}</h3>
          <button onClick={handlePrevious} className="text-blue-500 hover:underline">
            Previous
          </button>

          {/* Next Button */}
          <button onClick={handleNext} className="text-blue-500 hover:underline">
            Next
          </button>
        </div>
        
        <div className="flex gap-2">
          <div className="w-1/4 shadow-lg">
            <h4 className="text-2xl font-semibold mb-4">Classes</h4>
            {/* List of classes with checkboxes */}
            <ul>
  {[
    { class: '9th', section: 'Quaid-e-Azam' },
    { class: '10th', section: 'Allama Iqbal' },
    { class: '11th', section: 'Zulfikar Bhutto' },
    { class: '12th', section: 'Asif Ali Zardari' },
    { class: '8th', section: 'John Allen' },
    { class: '7th', section: 'Kareena Kapoor' }
  ].map((ob, index) => (
    <li key={index} className="flex  text-lg p-2 hover:bg-gray-100">
      <div><input type="checkbox" className="mr-2 mt-4" /></div>
      <div className='flex flex-col '>    
      <h2 className='ml-2'> {ob.class}</h2>
      <span className="ml-2"> Section : {ob.section}</span>
      </div>
    </li>
  ))}
</ul>

          </div>
          
          <div className="flex-grow ml-4 shadow-lg">
            <div className="grid grid-cols-8 gap-2 text-sm">
              {Array.from({ length: 10 }).map((_, hour) => (
                <div key={hour} className="col-span-1 border p-2 text-gray-600">
                  {`${7 + hour}:00 AM`}
                </div>
              ))}
              {/* Example time slots */}
              <div className="col-span-7 grid grid-rows-10 gap-2">
                <div className="flex gap-2">
                  <div className="bg-blue-100 text-blue-700 p-2 rounded">English - Room: A1</div>
                  <div className="bg-green-100 text-green-700 p-2 rounded">Math - Room: A1</div>
                </div>
                <div className="flex gap-2">
                  <div className="bg-yellow-100 text-yellow-700 p-2 rounded">Chemistry - Room: A1</div>
                  <div className="bg-red-100 text-red-700 p-2 rounded">Physics - Room: A1</div>
                </div>
                {/* Add more times and subjects as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateSheet;
