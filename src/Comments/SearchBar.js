import React from 'react';

function SearchBar({ location, setLocation, searchLocation }) {
  return (
    <div className='search flex justify-center items-center mt-4'>
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter City'
        type='text'
        className='border rounded-lg px-4 py-2 w-64 md:w-96 lg:w-1/2'
      />
    </div>
  );
}

export default SearchBar;



// import React from 'react';

// function SearchBar({ location, setLocation, searchLocation }) {
//   return (
//     <div className='search'>
//       <input
//         value={location}
//         onChange={(event) => setLocation(event.target.value)}
//         onKeyPress={searchLocation}
//         placeholder='Enter City'
//         type='text'
//         className='border rounded-lg px-4 py-2'
//       />
//     </div>
//   );
// }

// export default SearchBar;