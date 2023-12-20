import React, { useEffect } from 'react';

function GitHub() {
  useEffect(() => {
    fetch('https://api.github.com/users/imran5244');
  }, []);
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
      GitHub Followers
    </div>
  );
}

export default GitHub;
