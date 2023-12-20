// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/imran5244')
  //       .then((Response) => Response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className='text-center mx-auto mt-8 bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md'>
      <img
        src={data.avatar_url}
        alt='GitHub Profile'
        className='rounded-full mb-4 mx-auto'
        style={{ width: '150px', height: '150px' }}
      />
      <h2 className='text-3xl font-semibold mb-2'>
        GitHub Followers: {data.followers}
      </h2>
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const respone = await fetch('https://api.github.com/users/imran5244');
  return respone.json();
};
