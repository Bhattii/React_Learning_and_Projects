// export const Props = (p) => {
//   return (
//     <>
//       <h1>Learn Props</h1>
//       <h1>{p.name}</h1>
//       <h2>{p.roll}</h2>
//     </>
//   );
// };

// Object Destructing
export const Props = ({ name, roll }) => {
  return (
    <>
      <h1>Learn Props</h1>
      <h1>{name}</h1>
      <h2>{roll}</h2>
    </>
  );
};

export default Props;
